import { batchFind } from "@cumcord/modules/webpack";

export const [
    Checkbox,
    Text,
    { MAX_ACCOUNTS },
    stream,
    { getAccounts },
    FluxDispatcher,
    spotifyPlayer,
] = batchFind(({ findByProps, findByDisplayName }) => {
    findByDisplayName("Checkbox");
    findByDisplayName("Text");
    findByProps("MAX_ACCOUNTS");
    findByProps("ApplicationStreamFPSButtons");
    findByProps("getAccounts");
    findByProps("dirtyDispatch");
    findByProps("SpotifyAPI");
});