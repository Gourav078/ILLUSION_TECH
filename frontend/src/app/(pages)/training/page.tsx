"use client";

const page = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <div className="relative main-font-family min-h-screen top-20 flex flex-col items-center justify-center px-10 py-12 text-center">
        <iframe
          src="http://localhost/my"
          width="100%"
          height="800px"
          style={{
            border: "none",
            borderRadius: "10px",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default page;
