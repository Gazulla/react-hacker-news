import { formatDate } from "../utils/miscFunctions";

export default function Story({ story }) {
  const hasUrl = !!story.url;

  return (
    <li>
      <a {...(hasUrl ? { href: story.url } : {})} target="_blank" rel="noopener noreferrer">
        <article className={`grid grid-cols-12 gap-2 py-3 border-b border-neutral-600 ${hasUrl && "lg:hover:bg-neutral-900"}`}>
          {/* AUTHOR */}
          <div className="col-span-12 md:col-span-2 font-bold capitalize pl-2 overflow-hidden text-ellipsis">{story.author}</div>
          {/* TITLE */}
          <div className="col-span-12 md:col-span-10 text-neutral-300 pl-2">
            {story.url && <img className="w-4 h-4 inline mr-2" src="/external_link.svg" />}
            <span>{story.title}</span>
          </div>
          {/* DATE */}
          <div className="col-span-6  md:col-span-2 text-[14px] text-neutral-500 pl-2">{formatDate(story.createdAt)}</div>
          {/* COMMENTS */}
          <div className="col-span-6  md:col-span-10 text-[14px] text-neutral-500 pl-2">{`${story.numComments} comments`}</div>
        </article>
      </a>
    </li>
  );
}
