import { Editor } from "./components/Editor";

export function App() {

  return (
    <div className="min-h-screen text-zinc-50 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900 via-emerald-900 to-violet-900 p-8">
      <div className="bg-zinc-800 w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border-black/80 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-900 border-r border-r-zinc-700 p-4">
          <div className="flex gap-2 group">
            <button type="button" className="w-3 h-3 rounded-full  bg-zinc-300 group-hover:bg-red-400" />
            <button type="button" className="w-3 h-3 rounded-full  bg-zinc-300 group-hover:bg-yellow-400" />
            <button type="button" className="w-3 h-3 rounded-full  bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}
