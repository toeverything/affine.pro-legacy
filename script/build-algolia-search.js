const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch");
const fs = require("fs-extra");
const path = require("path");
const grayMatter = require("gray-matter");

try {
  dotenv.config();

  if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
    throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID is not defined");
  }

  if (!process.env.ALGOLIA_SEARCH_ADMIN_KEY) {
    throw new Error("ALGOLIA_SEARCH_ADMIN_KEY is not defined");
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}

const readdir = fs.readdirSync;
const readFile = fs.readFileSync;
const fsStat = fs.statSync;
const projectRootDir = path.resolve(__dirname, "..");

async function resolveFile(filepath) {
  const fileContent = readFile(filepath);
  const fileMetaRaw = grayMatter(fileContent);
  const { title, author, tags, cover, description, updated, created, layout } =
    fileMetaRaw.data;

  const filepathRemovedProject = filepath.replace(
    path.join(projectRootDir, "./src"),
    ""
  );

  const newFilepathRemovedProject = filepathRemovedProject
    .slice(0, 6)
    .concat(filepathRemovedProject.slice(14));

  return {
    objectID: title,
    title: title || null,
    authors: author?.split(",").map((au) => au.trim()) || null,
    tags: tags?.split(",").map((tag) => tag.trim()) || null,
    cover: cover
      ? "/content" + path.resolve(newFilepathRemovedProject, "..", cover)
      : null,
    description: description || null,
    created: created?.getTime() || null,
    updated: updated?.getTime() || null,
    href:
      "/content" +
      newFilepathRemovedProject.replace(
        path.extname(newFilepathRemovedProject),
        ""
      ),
    layout: layout || null,
  };
}
const blogRootDir = path.resolve(process.cwd(), "./src/blog");

(async function () {
  // initialize environment variables
  dotenv.config();

  try {
    // initialize the client with your environment variables
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    );

    // initialize the index with your index name
    const index = client.initIndex("test_blog");

    async function getFiles(dir) {
      const subDirs = readdir(dir);
      const files = subDirs.map(async (subDir) => {
        const res = path.resolve(dir, subDir);

        if (fsStat(res).isDirectory()) {
          return await getFiles(res);
        } else {
          if (res.endsWith(".md")) {
            return await resolveFile(res).then((e) => {
              index.saveObject(e);
            });
          }
          return null;
        }
      });
    }
    // add the data to the index
    getFiles(blogRootDir);
    console.log("success to update algolia-search");
  } catch (err) {
    console.error(err);
  }
})();
