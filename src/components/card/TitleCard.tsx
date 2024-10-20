type titleCardProps = {
    title: String,
    content: String
}

export function TitleCard(props: titleCardProps) {

    return (
        <div className="bg-blue-500 text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">{props.title}</h2>
            <p className="text-sm">{props.content}</p>
        </div>
    );
}