import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <UserButton 
        afterSignOutUrl="/"
      />
      <p>HelLo student</p>
    </main>
  );
}
