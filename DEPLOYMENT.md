# Deployment Guide

## Deployment Checklist

Before deploying to production, ensure:

- [ ] All environment variables are configured
- [ ] MongoDB database is set up and accessible
- [ ] EmailJS credentials are added (if email notifications enabled)
- [ ] Google site verification configured (if using)
- [ ] All clinic information is updated
- [ ] Contact information is correct
- [ ] Images/logos are optimized
- [ ] 404 page is tested
- [ ] Mobile responsiveness verified
- [ ] Performance optimized

## Vercel Deployment (Recommended)

### Step 1: Prepare Repository

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/yourusername/shilp-clinic.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign in with GitHub account
3. Click "Add New..." → "Project"
4. Import your repository
5. Configure project:
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Add Environment Variables

In Vercel Dashboard:

1. Go to Project Settings → Environment Variables
2. Add all variables from `.env.example`:
   - `MONGODB_URI`
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

3. Click "Save"
4. Redeploy project

### Step 4: Configure Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (may take up to 48 hours)

### Step 5: Enable Analytics

In Vercel Dashboard:
1. Go to Analytics
2. Enable Web Analytics to track performance

## Docker Deployment

### Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application files
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

### Create docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - MONGODB_URI=${MONGODB_URI}
      - EMAILJS_SERVICE_ID=${EMAILJS_SERVICE_ID}
      - EMAILJS_TEMPLATE_ID=${EMAILJS_TEMPLATE_ID}
      - EMAILJS_PUBLIC_KEY=${EMAILJS_PUBLIC_KEY}
    depends_on:
      - mongodb

  mongodb:
    image: mongo:5.0
    ports:
      - '27017:27017'
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
```

### Build and Run

```bash
# Build image
docker build -t shilp-clinic .

# Run container
docker run -p 3000:3000 \
  -e MONGODB_URI=your_mongodb_uri \
  -e EMAILJS_SERVICE_ID=your_service_id \
  -e EMAILJS_TEMPLATE_ID=your_template_id \
  -e EMAILJS_PUBLIC_KEY=your_public_key \
  shilp-clinic

# Or with docker-compose
docker-compose up -d
```

## AWS Deployment

### Using AWS EC2

1. Launch EC2 instance (Ubuntu 22.04 LTS)
2. SSH into instance
3. Install Node.js and npm:

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. Clone repository:

```bash
git clone your-repo-url
cd shilp-clinic
npm install
```

5. Create `.env` file with production variables
6. Build and start:

```bash
npm run build
npm start
```

### Using AWS Elastic Beanstalk

1. Install EB CLI:

```bash
pip install awsebcli
```

2. Initialize EB application:

```bash
eb init -p node.js-18 shilp-clinic
```

3. Create environment and deploy:

```bash
eb create production
eb deploy
```

## Google Cloud Deployment

### Using Cloud Run

1. Install Google Cloud CLI
2. Authenticate:

```bash
gcloud auth login
```

3. Create Dockerfile (see Docker section above)
4. Deploy:

```bash
gcloud run deploy shilp-clinic \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars MONGODB_URI=your_mongodb_uri
```

## Azure Deployment

### Using Azure App Service

1. Install Azure CLI
2. Login:

```bash
az login
```

3. Create resource group:

```bash
az group create --name shilp-clinic --location eastus
```

4. Create App Service Plan:

```bash
az appservice plan create --name shilp-plan --resource-group shilp-clinic --sku B1 --is-linux
```

5. Create web app:

```bash
az webapp create --resource-group shilp-clinic --plan shilp-plan --name shilp-clinic --runtime "NODE|18-lts"
```

6. Configure environment variables:

```bash
az webapp config appsettings set --resource-group shilp-clinic --name shilp-clinic \
  --settings MONGODB_URI="your_uri" EMAILJS_SERVICE_ID="your_id"
```

## DigitalOcean Deployment

### Using DigitalOcean App Platform

1. Connect GitHub repository
2. Create new app
3. Choose repository and branch
4. Configure build command: `npm run build`
5. Set environment variables
6. Deploy

## Heroku Deployment

1. Create `Procfile`:

```
web: npm start
```

2. Create `runtime.txt`:

```
18.13.0
```

3. Deploy:

```bash
heroku create shilp-clinic
git push heroku main
heroku config:set MONGODB_URI=your_uri
```

## Production Optimization

### Performance

1. Enable Next.js Image Optimization:
   - Use Image component for all images
   - Set appropriate sizes and quality

2. Enable compression:
   - Gzip enabled by default
   - Minify CSS/JS

3. Database optimization:
   - Add database indexes
   - Cache frequently accessed data

4. CDN setup:
   - Use Cloudflare for DNS/CDN
   - Cache static assets

### Security

1. Update security headers in next.config.mjs
2. Use HTTPS only (enforced by all platforms)
3. Regular security updates:

```bash
npm audit
npm audit fix
```

4. Implement rate limiting on API routes
5. Add CORS headers if needed

### Monitoring

1. **Vercel Analytics** (if using Vercel)
2. **Google Analytics** - Add to layout.tsx:

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
`}} />
```

3. **Sentry** - Error tracking:

```bash
npm install @sentry/nextjs
```

4. **MongoDB Atlas** - Database monitoring
5. **Uptime monitoring** - UptimeRobot or similar

## SSL/TLS Certificate

All platforms provide free SSL/TLS:
- Vercel: Automatic
- Docker: Use Let's Encrypt
- AWS: AWS Certificate Manager
- Google Cloud: Automatic
- Azure: Free with App Service
- DigitalOcean: Let's Encrypt integration
- Heroku: Automatic

## Backups

### MongoDB

1. Enable automatic backups in MongoDB Atlas
2. Set backup frequency to daily
3. Configure backup retention (default 7-90 days)
4. Test restore procedure regularly

### Database Snapshots

```bash
# Backup database
mongodump --uri "mongodb+srv://user:pass@cluster.mongodb.net/shilp-clinic" --out ./backup

# Restore database
mongorestore --uri "mongodb+srv://user:pass@cluster.mongodb.net/shilp-clinic" ./backup
```

## Scaling

As traffic grows:

1. **Database scaling**: Upgrade MongoDB cluster tier
2. **Application scaling**: 
   - Vercel: Automatic
   - AWS: Use load balancer
   - Docker: Kubernetes deployment
3. **Caching**: Implement Redis
4. **CDN**: Upgrade CDN tier

## Rollback Procedure

### Vercel
1. Go to Deployments
2. Select previous deployment
3. Click "Promote to Production"

### Docker/Manual
```bash
git revert <commit-hash>
git push
```

## Troubleshooting

### Application won't start
- Check environment variables
- Review error logs
- Verify database connection
- Check build output

### Database connection issues
- Verify MongoDB URI
- Check IP whitelist in MongoDB Atlas
- Ensure firewall allows connection

### Email notifications not working
- Verify EmailJS credentials
- Test template in EmailJS dashboard
- Check email service logs

### Performance issues
- Check database query performance
- Review Next.js metrics
- Optimize images
- Enable caching

## Support

For deployment issues:
1. Check platform-specific documentation
2. Review application logs
3. Test locally first
4. Contact platform support
