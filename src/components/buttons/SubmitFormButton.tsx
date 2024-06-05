import { useFormStatus } from "react-dom";

export default function SubmitFormButton({ children, className='', actionPending='Saving' }: { children: React.ReactNode, className?: string, actionPending?: string }) {
  const {pending} = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={"bg-blue-500 disabled:bg-gray-400 text-white disabled:text-gray-200 py-2 px-4 w-full flex gap-2 items-center justify-center " + className}
    >
      {pending && (
        <span>{actionPending}...</span>
      )}
      {!pending && children}
    </button>
  )
}