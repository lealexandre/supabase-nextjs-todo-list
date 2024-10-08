import Head from 'next/head'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import TodoList from '@/components/TodoListMember'
import TodoListMember from '@/components/TodoListMember'

export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full bg-200">
        {/* {!session ? ( */}
          <div className="min-w-full min-h-screen flex items-center justify-center">
            <div className="w-full h-full flex justify-center items-center p-4">
              <div className="w-full h-full sm:h-auto sm:w-2/5 max-w-sm p-5 bg-white shadow flex flex-col text-base">
                <span className="font-sans text-4xl text-center pb-2 mb-1 border-b mx-4 align-center">
                  member access
                </span>
                <label className="font-sans text-base text-blue-gray-700 font-normal mx-4 mt-4">Enter your code</label>
                <input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " />
              {/* empty input for now */}
              </div>
            </div>
          </div>
        {/* ) : ( */}
          <div
            className="w-full h-full flex flex-col justify-center items-center p-4"
            style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
          >
            <TodoList code="" />
            <TodoListMember code="" />
          </div>
        {/* )} */}
      </div>
    </>
  )
}
