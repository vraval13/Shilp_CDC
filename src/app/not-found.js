import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Not Found - Dr. Gopal Raval",
  },
  description: "It shows invalid request made by the user.",
};

function NotFound() {
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#f0f0f0",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1 style={{ fontSize: "4rem", color: "#ff5252", margin: "0" }}>
            404
          </h1>
          <h2 style={{ fontSize: "2rem", margin: "10px 0", color: "#333" }}>
            Not Found
          </h2>
          <p style={{ margin: "10px 0", color: "#555" }}>
            Could not find requested resource
          </p>
          <Link href={"/"}>
            <button>
              Go to Home Page
            </button>
          </Link>
          <p>Facing problem? <span><Link href={"/contact"}>
            <button>
              Contact us
            </button>
          </Link></span></p>
        </div>
      </section>
    </>
  );
}

export default NotFound;
