const { chromium } = require("playwright");
const path = require("path");

const sites = [
  {
    name: "warhammer",
    url: "file://" + path.resolve(__dirname, "../warhammer/index.html"),
  },
  {
    name: "christmas",
    url: "https://christmas-z73w.onrender.com/",
  },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport for consistent screenshots
  await page.setViewportSize({ width: 1280, height: 720 });

  for (const site of sites) {
    console.log(`Taking screenshot of ${site.name}...`);

    await page.goto(site.url, { waitUntil: "networkidle" });

    const screenshotPath = path.resolve(
      __dirname,
      `../images/${site.name}.png`
    );
    await page.screenshot({ path: screenshotPath });

    console.log(`Saved: ${screenshotPath}`);
  }

  await browser.close();
  console.log("Done!");
})();
