"use client"

import { ChatbotUISVG } from "@/components/icons/chatbotui-svg"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { redirect, RedirectType } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function HomePage({
  searchParams
}: {
  searchParams: { error_description: string }
}) {
  const { theme } = useTheme()

  if (
    searchParams.error_description ==
    "Database error loading user after sign-up"
  ) {
    redirect("/login?message=Email is not allowed", RedirectType.replace)
  }

  const goToLogin = () => {
    window.location.href = "/login"
  }

  return (
    <div className="flex size-full flex-col items-center justify-center">
      <div>
        <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} />
      </div>

      <div className="mt-2 text-4xl font-bold">Chatbot UI</div>

      <Button
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold text-white"
        onClick={goToLogin}
      >
        Start Chatting
        <IconArrowRight className="ml-1" size={20} />
      </Button>
    </div>
  )
}
