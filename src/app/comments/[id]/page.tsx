import CommentId from "@/components/CommentId/CommentId";
type Props={
    params: { id: string; };
}
const Page = async ({params}:Props) => {

    return (
        <div>
            <CommentId params={params}/>
        </div>
    );
};

export default Page;