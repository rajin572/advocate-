"use server";

export const contactUs = async (data) => {
  const res = await fetch(
    // `http://localhost:3000/api/contactus`,
    `https://home-care-website.vercel.app/api/contactus`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const userInfo = await res.json();
  return userInfo;
};
