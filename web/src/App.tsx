import { MagnifyingGlassPlus } from "phosphor-react";
import "./styles/main.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-gradient bg-clip-text">duo</span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/cs.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter strike
            </strong>
            <span className="text-zinc-300 text-sm block">10 anuncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/cs.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter strike
            </strong>
            <span className="text-zinc-300 text-sm block">10 anuncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/cs.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter strike
            </strong>
            <span className="text-zinc-300 text-sm block">10 anuncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/cs.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter strike
            </strong>
            <span className="text-zinc-300 text-sm block">10 anuncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/cs.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter strike
            </strong>
            <span className="text-zinc-300 text-sm block">10 anuncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/cs.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter strike
            </strong>
            <span className="text-zinc-300 text-sm block">10 anuncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              {" "}
              Publique o seu anuncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anuncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
