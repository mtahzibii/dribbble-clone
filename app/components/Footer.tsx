import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../constants";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div>
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link, index) => (
        <Link href="/" key={index}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col gap-12">
        <div className="w-1/4">
          <Image
            src="/logo-purple.svg"
            alt="logo"
            height={43}
            width={115}
            color="red"></Image>
          <p className="mt-6 font-normal text-sm text-start max-w-xs">
            Flexibble is the world&apos;s leading community for creatives to
            share, grow, and get hired.
          </p>
        </div>
        <div className="flex justify-between  flex-wrap">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex flex-col gap-6">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex flex-col gap-6">
            <FooterColumn
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          <FooterColumn
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
        <div className="flex justify-between text-sm max-sm:flex-col max-sm:justify-center max-sm:items-center gap-4">
          <p className="font-medium ">@ 2023 Flexibble. All rights reserved</p>
          <p>
            <span className="font-bold">10,214</span> projects submitted
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
