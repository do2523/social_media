import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Map from "~/app/_components/map"
import dynamic from "next/dynamic";
export default async function Home() {

	//const session = await getServerAuthSession();

  //void api.post.getLatest.prefetch();
  const Map = dynamic(
    () => import('~/app/_components/map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
  return (
	  <main>
		
	  </main>
  );
}
