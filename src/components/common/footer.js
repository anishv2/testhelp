import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./container";
import Icons from "./icons";

const Footer = () => {
  return (
    <footer className="bg-[var(--dark)]">
      <Container className="py-8 px-6 lg:py-0 flex flex-col justify-between gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 py-10">
          <div className="text text-sm">
            <p>
              Our vision is to elevate the role of the planner by delivering
              intelligence that empowers, automates, and transforms how events
              are planned, managed, and delivered.
            </p>
          </div>
           <div className="text text-sm">
            <p>
              Aletheia is building a future where AI works as the essential
              partner to every event professional to remove the burden of
              busywork, surface what matters, and enable faster, more strategic
              decisions.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-start flex-col h-full">
            <Link
              href="/"
              className="relative w-[100px] sm:w-[150px] h-[30px] sm:h-[45px] mb-4"
            >
              <Image
                src="/images/brandlogo.webp"
                alt="Aletheia"
                fill
                sizes="100%"
                className="block w-full"
                loading="lazy"
                decoding="async"
              />
            </Link>

            <h6 className="text-left text-white">
              <span style={{ fontWeight: 400 }}>
                The future of event operations.
              </span>
            </h6>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-sm text-white">
            <Link href="https://aletheia.events/privacy-policy/">
              Privacy policy
            </Link>
            <div>
              <Link href="">
                <Icons.linkedin />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-2">
          <p className="text-gray-300 text-xs">
            Copyright {new Date().getFullYear()} Aletheia
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
