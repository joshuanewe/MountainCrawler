const { exit } = require("process");
const { crawl } = require("./crawl");
async function main() {
	const args = process.argv.slice(2);
	if (args.length < 1) {
		console.log("Please provide a url to scrape");
		exit(1);
	}
	const url = args[0];
	console.log(`Scraping ${url}...`);
	await crawl(url);
}
main();
