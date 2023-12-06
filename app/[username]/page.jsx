"use client";
import { UserAuth } from "@/context/AuthContext";
import { Home } from "@/components/Home";

export default function HomePage({ params }) {
  const { user } = UserAuth();

  const { username } = params;

  return <Home user={user} username={username} />;
}
