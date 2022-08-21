// import { createInstance } from "orbit-db";

const config = {
  preload: {
    enabled: false,
  },
  config: {
    Addresses: {
      Swarm: [
        "/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
        "/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
        "/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/",
      ],
    },
  },
};

export function createDatabase() {
  return 1;
}
async function loadOrbitDb() {
  // const { create } = await import("orbit-db-core");
}

async function loadIpfs() {
  const { create } = await import("ipfs-core");

  const node = await create({ config });

  return node;
}
