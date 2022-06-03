import { CloseButton } from "./CloseButton";

export function WidgetForm() {
  return (
    <div className="bg-zinc-100 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-3rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6 text-zinc-800">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <p>Hello World</p>

      <footer className="text-xs text-zinc-500">
        Feito com ♥ pelo <a href="https://github.com/LeandroRMachado" className="underline underline-offset-2">LeandroRMachado</a>
      </footer>
    </div>
  );
}