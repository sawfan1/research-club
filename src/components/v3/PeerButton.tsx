"use client";
import { readex_pro } from "@/lib/ufl";

export default function PeerButton() {
  const handlePeer = () => {
    const recipient = "sdresearchclub@gmail.com";
    const subject = "Request for Peer Review";
    const body =
      "Hello,\n\nI would like to request a peer review for my research paper. ... \n (attach your paper or provide a link if applicable))";

    const mailtoLink = `https://docs.google.com/forms/d/12Dn_g5E5VYWW8QnKYL5X_AJgrzxLPxzjKloz7oU1xMQ`;

    window.open(mailtoLink, '_blank')
  };
  return (
    <button
      onClick={handlePeer}
      className={`${readex_pro.className} mt-8 relative border-1 border-black cursor-pointer bg-black p-4 text-white rounded-[10px] w-[148px]`}
    >
      Avail Now!{" "}
      <p className="absolute text-sm text-black bottom-[-30px] left-2">
        (use mailing client)
      </p>
    </button>
  );
}
