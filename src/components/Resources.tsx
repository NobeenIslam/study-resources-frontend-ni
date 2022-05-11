export default function Resources(): JSX.Element {
    /*
    Fetch data resources data and put it into array
    Define interface
    Map array into SingleRsrouce component
    */

    interface Resource {
        id: number,
        title: string,
        description: string,
        url: string,
        origin: string,
        author_id: number,
        creation_date: string,
        votes: number,
        content_type: string,
        recommended_week?: string,
        evaluation?: string,
        justification?: string
    }


    return (
        <main>
            { }
        </main>
    )
}