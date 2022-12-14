import { MikroORM, RequiredEntityData } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    const post = orm.em.create(Post, { title: "my first post" } as RequiredEntityData<Post> );
    await orm.em.persistAndFlush(post);
};

main().catch((err) => {
    console.error(err);
})