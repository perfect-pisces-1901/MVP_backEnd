const Song = require("../server/db/songs");
const db = require("../server/db/db");

const seed = async () => {
  await db.sync({ force: true });

  const testSong = await Song.create({
    Hash: "26HZZIUSIZJSHZIIHSZH"
  });

  db.close();
  console.log(`

    Seeding successful!

  `);
};

seed().catch(err => {
  db.close();
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `);
});
