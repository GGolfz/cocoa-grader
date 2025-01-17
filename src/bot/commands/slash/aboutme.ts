import { CocoaVersion } from "cocoa-discord-utils/meta";
import { CocoaSlash } from "cocoa-discord-utils/slash";
import { Author, CocoaBuilder, ephemeral } from "cocoa-discord-utils/template";

import { Embed } from "@discordjs/builders";

import { Cocoa } from "../../shared";

export const aboutme: CocoaSlash = {
    command: CocoaBuilder("aboutme", "Get Info about me!")
        .addBooleanOption(ephemeral())
        .toJSON(),
    func: async (ctx) => {
        const ephe = ctx.options.getBoolean("ephemeral") || false;
        const embed = new Embed()
            .setAuthor(Author(ctx))
            .setTitle("Cocoa Grader")

            .setDescription(
                "I am Cocoa Grader! Who will carefully grade your code! 💖💖"
            )
            .setColor(Cocoa.Color)
            .setThumbnail(Cocoa.GIF.お姉ちゃんに任せなさい)
            .addFields(
                {
                    name: "Bot Version",
                    value: process.env.npm_package_version ?? "Unknown",
                    inline: true,
                },
                {
                    name: "Cocoa Utils Version",
                    value: CocoaVersion,
                    inline: true,
                },
                {
                    name: "Time Compensation",
                    value: `${process.env.EXTRA_TIME ?? "1"}x`,
                    inline: true,
                },
                {
                    name: "GitHub",
                    value: "[Click](https://github.com/Leomotors/cocoa-grader)",
                    inline: true,
                },
                {
                    name: "Problem Statements",
                    value: "[Click](https://leomotors.github.io/stupid-problems/)",
                    inline: true,
                }
            )
            .setFooter(Cocoa.Footer(ctx));

        await ctx.reply({
            embeds: [embed.toJSON()],
            ephemeral: ephe,
        });
    },
};
