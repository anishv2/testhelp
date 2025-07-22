"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icons from "./icons";
import Container from "./container";

const Breadcrumbs = ({ element }) => {
  const pathname = usePathname();
  const skipPaths = ["categories", "articles"];
  const breadCrumbElement = !element ? { label: "", path: "" } : element;

  const generateBreadcrumbs = () => {
    const paths = pathname.split("/").filter((x) => !skipPaths.includes(x));
    const crumbs = paths
      ?.map((_, index) => ({
        label: _.charAt(0).toUpperCase() + _.slice(1).replace(/[-_]/g, " "),
        path: `/${paths.slice(0, index + 1).join("/")}`.replace(/\/+/g, "/"),
      }))
      .filter((crumb) => crumb.label.trim() !== "");

    return [{ label: "Home", path: "/" }, breadCrumbElement, ...crumbs];
  };
  const renderedBreadcrumbs = generateBreadcrumbs();

  return (
    <Container>
      <nav className="py-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex flex-wrap text-xs sm:text-base">
          {renderedBreadcrumbs.map((breadcrumb, ind) =>
            renderedBreadcrumbs.length - 1 === ind ? (
              <li
                key={breadcrumb.label}
                className="wrap-anywhere flex max-w-full items-center text-gray-500"
              >
                {breadcrumb.label}
              </li>
            ) : (
              <li
                key={breadcrumb.label}
                className="wrap-anywhere flex max-w-full items-center"
              >
                <Link
                  href={breadcrumb.path}
                  className="text-default hover:underline"
                >
                  {breadcrumb.label}
                </Link>
                {breadcrumb?.label && (
                  <span>
                    <Icons.arrowRight className="size-4" />
                  </span>
                )}
              </li>
            )
          )}
        </ol>
      </nav>
    </Container>
  );
};

export default Breadcrumbs;
