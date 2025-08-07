import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function home() {
  return (
    <div className="max-w-7xl  border flex flex-col min-h-screen px-6 py-5">
      <div className="border">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo
        illo, aperiam tempore a ducimus atque dolore libero necessitatibus!
        Nobis aperiam dignissimos illo itaque eaque quidem rem ex dicta
        accusamus qui nesciunt consequuntur veritatis non, debitis quasi
        aspernatur natus doloribus!{" "}
      </div>
      <div className="flex mt-3">
        <div className="border flex-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet id
          consequatur aspernatur deserunt minima beatae tempora maiores dolorem
          ducimus, quasi tempore alias explicabo, aliquam cupiditate quas quos
          provident quae neque similique aliquid. Veritatis qui sit, neque
          dolores recusandae illo unde cum quas beatae vero non molestiae
          perspiciatis porro ipsam maxime rem distinctio ullam labore
          laboriosam. Magni est, tenetur odio ipsam, quos, explicabo mollitia
          iure tempore quas aut autem! Mollitia maxime consectetur ad ullam
          optio veniam cumque natus, non alias corporis. Fugit molestias at,
          natus placeat non rem et alias eos perspiciatis corrupti laboriosam
          amet voluptatibus! Eaque ullam dolorum illo itaque.
        </div>
        <div className="border flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          accusamus inventore nisi deleniti cupiditate non expedita, culpa
          labore, voluptas minima velit harum quidem, ullam id magnam excepturi
          ut nemo suscipit voluptatem neque. Corporis molestiae doloremque sed
          dolorem incidunt iure eligendi impedit, accusamus magni vitae dolorum
          neque sit, magnam aut expedita quia nesciunt atque similique.
          Voluptatum laborum atque enim temporibus impedit placeat nostrum
          maxime necessitatibus tempora veniam fugit, laudantium illo ullam quia
          ipsa incidunt qui harum quos repudiandae neque sint molestias? Amet,
          voluptatibus unde ducimus exercitationem ratione, adipisci ab eum
          doloribus similique rerum nam quis quam fugiat error distinctio
          consequuntur autem!
        </div>
      </div>

      <div className="border mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptates
        repudiandae qui corrupti doloribus, beatae at doloremque voluptas,
        minima reprehenderit vel assumenda sapiente enim? Corporis obcaecati
        molestias, aperiam a mollitia, explicabo eaque doloribus facilis sit
        repellendus possimus, quo qui molestiae. Fugiat repellat quisquam neque
        quibusdam accusamus quidem nulla quasi est, nihil reiciendis, expedita
        impedit, minus ratione tenetur commodi dolor natus inventore doloribus
        id laborum harum reprehenderit eveniet! Ab tempore totam, debitis labore
        asperiores deserunt perferendis error id, voluptates quae ducimus.
        Laboriosam dolore nobis dolorem voluptatem nihil rerum distinctio
        necessitatibus hic et eos? Ipsam amet voluptates quidem nesciunt
        repellendus esse deserunt, dolore veritatis iure, quasi impedit. Vel eos
        vitae possimus assumenda maxime omnis natus rerum soluta repellat, velit
        laudantium tempora nesciunt tempore amet saepe ratione unde quia!
        Debitis ipsam eos corrupti, laborum minima ab provident, perferendis
        perspiciatis itaque eaque doloremque ea veritatis autem eveniet dolore.
        Distinctio laborum rem voluptas aut nulla?
      </div>
    </div>
  );
}
