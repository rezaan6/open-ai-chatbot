import { getServerSession } from "next-auth";
import SideBar from "@/components/SideBar";
import "@/styles/globals.css";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/Login";
import SessionProvider from "@/components/SessionProvider";
import ClientProvider from "@/components/ClientProvider";
import { adminDB } from "firebaseStoreAdmin";





export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  
  // // Get the authenticated user's email from the session object
  // const userEmail = session?.user?.email;

  // // If the email exists, retrieve the user document and check if it exists
  // if (userEmail) {
  //   const userDocRef = adminDB.collection('user').doc(userEmail);

  //   // Retrieve a list of all users in the "user" collection
  //   const usersSnapshot = await adminDB.collection('user').get();

  //   // Check if the authenticated user already has a document in the "user" collection
  //   if (!usersSnapshot.docs.some(doc => doc.id === userEmail)) {
  //     console.log('adas');

  //     // If the user doesn't exist, create a new document in the "user" collection with the email as the ID
  //     await userDocRef.set({
  //       name: session?.user?.name,
  //       image: session?.user?.image,
  //       createdAt: new Date()
  //     });

  //     // await adminDB.collection("user").doc(session?.user?.email!).collection("chats").add({
  //     // });
  //   }
  // }

  // Check if user is signed in
 






  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            < Login />
          ) : (

            < div className="flex">

              {/* Sidebar */}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-scroll-auto md:min-w-[20rem] ">
                {" "}
                <SideBar />
              </div>

              {/* Client Provider - Notification */}
              <ClientProvider />

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>

          )}
        </SessionProvider>
      </body>
    </html >
  );
}
