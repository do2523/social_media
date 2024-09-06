import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Map from "~/app/_components/map"
import dynamic from "next/dynamic";
import Link from "next/link";
export default async function Home() {

	//const session = await getServerAuthSession();

  //void api.post.getLatest.prefetch();
  const Map = dynamic(
    () => import('~/app/_components/map'),
    { ssr: false } 
  )
  return (
	  <main>
		
	  </main>
  );
}
