const imgVector = 'https://www.figma.com/api/mcp/asset/f8095f95-5e23-4909-8ac8-9a5a6073a9b9'
const imgLogo = 'https://www.figma.com/api/mcp/asset/9c186424-03bc-4cd8-9755-9843af844b7d'

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[512px] items-center justify-center px-10 py-10">
        <div className="flex w-full max-w-[352px] flex-col gap-6">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <img alt="" className="h-6 w-[23px]" src={imgVector} />
              <span className="font-mono text-[13.5px] font-semibold tracking-[-0.27px] text-[#03161c]">
                Superhands
              </span>
            </div>
            <button
              type="button"
              className="cursor-pointer border-0 bg-transparent p-0 text-sm font-medium text-[#03161c]"
            >
              Log in
            </button>
          </header>

          <div className="flex flex-col gap-0.5">
            <h1 className="text-2xl font-semibold leading-[1.1] text-[#03161c]">
              Join Waitlist
            </h1>
            <p className="text-sm font-medium leading-[1.44] text-[rgba(3,22,28,0.8)]">
              We&apos;re phasing our users, enter your details and we&apos;ll be in touch as soon as its your turn.
            </p>
          </div>

          <button
            type="button"
            className="flex h-11 w-full cursor-pointer items-center justify-center gap-3 rounded-[14px] border border-[rgba(82,82,84,0.1)] bg-white px-4 py-3 text-sm font-medium text-[#03161c]"
          >
            <img alt="" className="h-5 w-5" src={imgLogo} />
            Continue with Google
          </button>

          <form className="flex flex-col gap-[21px]" onSubmit={(event) => event.preventDefault()}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-[#03161c]">Your email</span>
              <input
                type="email"
                placeholder="Enter email"
                className="h-11 w-full rounded-none border border-[rgba(82,82,84,0.05)] bg-[#f7f7f7] px-3 text-sm text-[#03161c] outline-none placeholder:text-[rgba(3,22,28,0.5)]"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-[#03161c]">Create a password</span>
              <input
                type="password"
                placeholder="Min 6 characters"
                className="h-11 w-full rounded-none border border-[rgba(82,82,84,0.05)] bg-[#f7f7f7] px-3 text-sm text-[#03161c] outline-none placeholder:text-[rgba(3,22,28,0.5)]"
              />
            </label>

            <button
              type="submit"
              className="h-11 w-full cursor-pointer rounded-[14px] border border-[rgba(82,82,84,0.05)] bg-gradient-to-b from-[#c4f2ff] to-[#b2eeff] px-4 py-3 text-sm font-semibold text-[#009eca]"
            >
              Join the Waitlist
            </button>
          </form>

          <p className="text-sm leading-[1.44] text-[rgba(3,22,28,0.5)]">
            By signing up, you agree to our{' '}
            <a href="#" className="underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
