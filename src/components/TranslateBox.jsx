import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TranslateBox({ISOCode}) {
    
    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch("/api", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inputValue: e.target[0].value, ISOCode, }),
        });

        const data = await res.json();
        e.target[1].value = data.text

    }
    
    return (
        <div className="w-full h-[30vh] flex justify-center tems-center gap-4 ">

            <form onSubmit={handleSubmit}
                className="flex justify-center flex-col items-center gap-4" 
            >
                <div className="w-full flex justify-center items-center gap-4">
                    <Input type="search" placeholder="Enter text" className="w-[300px]" />
                    
    				<Input 
                        type="text" 
                        disable="true"
                        className="w-[300px]" 
                        placeholder="Translation"
                    />
                    
                </div>
                <Button>translate</Button>
            </form>
        </div>
    );
}
