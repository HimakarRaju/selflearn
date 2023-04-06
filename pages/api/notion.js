// const { Client } = require("@notionhq/client");

const { Client, APIErrorCode } = require("@notionhq/client");
import { NotionAPI } from "";

const notion = new NotionAPI({
	auth: process.env.NOTION_API_KEY,
});

export async function getStaticProps() {
	const databaseId = process.env.local.NOTION_DATABASE_ID;
	const response = await notion.databases.query({
		database_id: databaseId,
	});

	const pages = response.results.map((page) => {
		return {
			id: page.id,
			title: page.properties.Name.title[0].text.content,
			description: page.properties.Description.rich_text[0].text.content,
			coverImageUrl: page.properties.Cover.image?.url,
		};
	});

	return {
		props: {
			pages,
		},
	};
}

export default function NotionPage({ pages }) {
	return (
		<div className="cards">
			{pages.map((page) => (
				<div className="card" key={page.id}>
					{page.coverImageUrl && (
						<img
							className="card-image"
							src={page.coverImageUrl}
							alt=""
						/>
					)}
					<div className="card-content">
						<h2 className="card-title">{page.title}</h2>
						<p className="card-description">{page.description}</p>
					</div>
				</div>
			))}
		</div>
	);
	console.log(NotionPage);
}
