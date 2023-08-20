import { BiHomeAlt } from "react-icons/bi";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row ">
      <div className="w-1/5 bg-sky-950 p-4 h-screen flex-col space-y-3">
        <div className="flex flex-col bg-neutral-100 h-auto rounded-lg">
          <div tabIndex={0} className="collapse bg-base-200 collapse-arrow">
            <div className="collapse-title text-xl font-medium">Google</div>
            <div className="collapse-content">
              <p>
                <a href="#">Analytics</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-neutral-100 h-4/5 rounded-lg">
          <div className="flex flex-col space-y-2">
            <Link href="/company/" className="flex flex-col">
              <button className="btn text-lg justify-start normal-case font-medium">
                <BiHomeAlt className="inline-block" />
                Dashboard
              </button>
            </Link>
            <Link href="/company/jobs" className="flex flex-col">
              <button className="btn  text-lg justify-start normal-case font-medium">
                <BiBriefcaseAlt2 className="inline-block" />
                Jobs
              </button>
            </Link>
            <Link href="/company/applications" className="flex flex-col">
              <button className="btn text-lg justify-start normal-case font-medium">
                <GrDocumentText className="inline-block" />
                Applications
              </button>
            </Link>
            <Link href="/company/chats" className="flex flex-col">
              <button className="btn text-lg justify-start normal-case font-medium">
                <BiChat className="inline-block" />
                Chat
              </button>
            </Link>
          </div>
          <div className="flex flex-col" >
            <button className="btn text-lg justify-start normal-case font-medium">
              <FiLogOut className="inline-block" />
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
