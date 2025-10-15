import { useState } from "react";
import { Container } from "../../components/container";


export function Home() {
  const [endereco, setEndereco] = useState("");
  function handlePaywall() {
    window.open("https://www.removepaywall.com/search?url="+endereco, "_blank")
  }
  return(
    <Container>
      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Removedor de Paywall
      </h1>

      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
          placeholder="Digite o endereço..."
          value={endereco}
          onChange={text => setEndereco(text.target.value)}

          />
          <button
            className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg"
            onClick={handlePaywall}
          >
            Remover
          </button>
      </section>


    </Container>
  )
}
