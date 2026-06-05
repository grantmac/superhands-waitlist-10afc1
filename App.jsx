export default function App() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-[352px] flex flex-col gap-6">
        <header className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[6px]">
            <img
              src="/logo-mark.svg"
              alt=""
              className="h-6 w-[23px] shrink-0"
            />
            <span className="font-mono text-[13.5px] font-semibold leading-[1.1] tracking-[-0.27px] text-[#03161c]">
              Superhands
            </span>
          </div>
          <button
            type="button"
            className="text-sm font-medium leading-[1.44] text-[#03161c] hover:opacity-80 transition-opacity"
          >
            Log in
          </button>
        </header>

        <section className="flex flex-col gap-0.5">
          <h1 className="text-2xl font-semibold leading-[1.1] text-[#03161c]">
            Join Waitlist
          </h1>
          <p className="text-sm font-medium leading-[1.44] text-[rgba(3,22,28,0.8)]">
            We&apos;re phasing our users, enter your details and we&apos;ll be
            in touch as soon as its your turn.
          </p>
        </section>

        <button
          type="button"
          className="flex h-11 w-full items-center justify-center gap-3 rounded-[14px] border border-[rgba(82,82,84,0.1)] px-4 py-3 text-sm font-medium leading-[1.44] text-[#03161c] transition-colors hover:bg-[#fafafa]"
        >
          <img src="/google-logo.svg" alt="" className="h-5 w-5 shrink-0" />
          Continue with Google
        </button>

        <form className="flex flex-col gap-[21px]">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium leading-[1.44] text-[#03161c]">
              Your email
            </span>
            <input
              type="email"
              placeholder="Enter email"
              className="h-11 w-full border border-[rgba(82,82,84,0.05)] bg-[#f7f7f7] px-3 text-sm leading-[1.44] text-[#03161c] placeholder:text-[rgba(3,22,28,0.5)] outline-none focus:border-[rgba(82,82,84,0.2)]"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium leading-[1.44] text-[#03161c]">
              Create a password
            </span>
            <input
              type="password"
              placeholder="Min 6 characters"
              className="h-11 w-full border border-[rgba(82,82,84,0.05)] bg-[#f7f7f7] px-3 text-sm leading-[1.44] text-[#03161c] placeholder:text-[rgba(3,22,28,0.5)] outline-none focus:border-[rgba(82,82,84,0.2)]"
            />
          </label>

          <button
            type="submit"
            className="h-11 w-full rounded-[14px] border border-[rgba(82,82,84,0.05)] bg-gradient-to-b from-[#c4f2ff] to-[#b2eeff] px-4 py-3 text-sm font-semibold leading-[1.44] text-[#009eca] transition-opacity hover:opacity-90"
          >
            Join the Waitlist
          </button>
        </form>

        <p className="text-sm leading-[1.44] text-[rgba(3,22,28,0.5)]">
          By signing up, you agree to our{" "}
          <a href="#" className="underline decoration-solid">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline decoration-solid">
            Privacy Policy
          </a>
        </p>
      </div>
    </main>
  );
}
