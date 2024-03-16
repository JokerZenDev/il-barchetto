import { headers } from "next/headers";

export default async function Locales() {
  const headersList = headers();

  const pathname = headersList.get("x-pathname");

  console.log(pathname);

  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <a href={`/it${pathname}`} className="">
        IT
      </a>
      <a href={`/en${pathname}`} className="">
        EN
      </a>
    </div>
  );
}
