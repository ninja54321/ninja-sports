import { Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const MidSectionDesc = () => {
  return (
    <Stack>
      <Stack alignItems={"center"} direction={"row"} gap={2}>
        <Image
          src={require("../../../../../helper/ninja-img/img-32.jpg")}
          alt="intro-img"
          height={500}
          style={{ borderRadius: "50%", padding: "4px" }}
        />

        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio
          culpa ad accusamus molestiae assumenda iure totam pariatur at odit
          corrupti officia eos obcaecati neque, quia soluta iusto quo, magnam,
          dolorum sapiente a perspiciatis. Iusto doloribus recusandae
          consequatur veniam fuga?
        </Typography>
      </Stack>

      <Stack
        sx={{ backgroundColor: "#f2f4f3", padding: "2rem" }}
        alignItems={"center"}
      >
        <Typography sx={{ fontSize: "2.5rem", fontWeight: "500" }} gutterBottom>
          #Ninja Sports
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum id quae
          veritatis earum soluta odio sit doloremque! Error pariatur quam quasi
          animi odio ipsum temporibus natus veritatis sed cum eos totam,
          repudiandae dolorum? Commodi exercitationem perferendis placeat nulla
          repudiandae, consequatur natus nemo eos error, velit ab facere ea
          dicta amet assumenda eveniet in ratione labore omnis aliquam,
          voluptatem debitis reprehenderit. Laudantium numquam quasi architecto
          aspernatur, est, sequi expedita voluptate hic ab molestiae dignissimos
          illo quas ipsam iste, illum esse vel repudiandae maxime! Nisi
          voluptatem sint, nihil hic vero adipisci praesentium nemo doloremque
          magni rem cupiditate labore. Fuga doloribus quia natus officia dicta
          doloremque voluptate deserunt iste eligendi deleniti hic nobis
          consectetur quasi autem, ea corrupti, incidunt sunt, cum quaerat nemo
          nulla saepe reiciendis facilis. Animi officiis aliquid quam ad.
          <br />
          <br /> Itaque officia illum quibusdam ad perspiciatis nobis nulla
          vitae obcaecati illo. Quasi iste accusamus repellat unde soluta
          dolores facilis? Dignissimos possimus repellat illo, fugit voluptas
          commodi ad libero! Cum repellendus molestias sequi ea consequuntur.
          Vero vitae consequuntur esse doloremque, quas autem, quasi incidunt
          impedit asperiores ut dignissimos doloribus, enim officia iste et id!
          Reprehenderit deleniti ex velit. Recusandae voluptates voluptatum,
          laudantium soluta, possimus repellat itaque adipisci nihil,
          consectetur ut facere natus optio cum porro! Corrupti dolorem
          laboriosam repellat reiciendis dolorum magnam, repudiandae iste
          voluptas recusandae doloribus possimus ipsum incidunt veniam
          reprehenderit quasi. Et consequatur, laboriosam ipsa earum saepe
          ducimus deserunt veniam ut, magni, fuga molestias asperiores deleniti
          omnis. Dolorem ullam hic ducimus necessitatibus quam, voluptates at
          placeat sed consequatur quo aperiam amet eligendi expedita beatae,
          sequi, ad eaque voluptas!
          <br /> <br />
          Tempore doloribus voluptate iure esse architecto perferendis qui
          ducimus, quae recusandae officia! Ab perspiciatis quam, consequatur
          aliquid cum, maxime dignissimos eius illo quis aspernatur nam harum
          amet! Debitis suscipit amet doloribus id, beatae error perferendis,
          officiis quaerat alias iste dolores reprehenderit consectetur maiores
          voluptates modi libero dolore eligendi. Sint vitae quisquam ratione
          officia suscipit quia unde dolor soluta. Corporis ipsum dolorem nisi
          possimus dignissimos laborum vero itaque hic, fugiat nobis labore
          necessitatibus corrupti soluta eaque ratione aliquid voluptate quos
          tenetur? Beatae facere asperiores delectus repellendus at obcaecati
          enim tempora aperiam incidunt eaque, fugit quibusdam veniam sapiente
          rem voluptatibus sed quisquam, nam sit eum recusandae saepe rerum
          dignissimos culpa. Deserunt explicabo iste inventore quidem voluptatem
          aspernatur delectus earum molestiae optio accusantium perspiciatis
          quos expedita, quibusdam velit provident eligendi! Culpa ex, similique
          perferendis fugiat quia sapiente. Recusandae natus accusantium
          consectetur nemo assumenda nulla provident.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MidSectionDesc;
