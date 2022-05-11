import { useState } from "react"

export default function MainPage(): JSX.Element {
    const [resourceSearch, setResourceSearch] = useState<string>("")
    return (
        <main>
            <h1>Recommendations for you</h1>
            <input
                placeholder="Search Resources..."
                value={resourceSearch}
                onChange={(e) => setResourceSearch(e.target.value)}
            >
            </input>
        </main>

    )
}