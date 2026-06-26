📦 Next.js Products App (DummyJSON)

A simple Next.js App Router project that fetches and displays products from the DummyJSON API.

🚀 Features

    ♦️ Next.js 13+ App Router
    ♦️ Server-side data fetching
    ♦️ Product listing from API
    ♦️ Next.js Image optimization
    ♦️ Loading UI support (loading.tsx)
    ♦️ TypeScript support (optional)

📡 API Used

    ♦️ Products API:
  
      https://dummyjson.com/products


🛠️ Tech Stack

    ♦️ Next.js
    ♦️ React
    ♦️ TypeScript
    ♦️ Tailwind CSS
    ♦️ DummyJSON API

  📂 Project Structure

           app/
             ├── page.tsx
             ├── loading.tsx
             ├── layout.tsx
            next.config.js

⚙️ Installation
  1. Clone the project

            git clone https://github.com/sahangeesara/dummydataapp.git
            cd dummydataapp

2. Install dependencies:

             npm install
   
4. Run development server
   
          npm run dev

App runs at:

         http://localhost:3000
      
🧠 How It Works

Fetch Products

      async function getData() {
        const res = await fetch("https://dummyjson.com/products");
      
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
      
        return res.json();
      }
      
Render Products

      const data = await getData();
      
      return (
        <>
          {data.products.map((product) => (
            <div key={product.id}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={200}
              />
              <h2>{product.title}</h2>
            </div>
          ))}
        </>
      );
      
⚠️ Important Setup (Next Image)

If images don’t load, add this to **next.config.js:**

      const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: "https",
              hostname: "cdn.dummyjson.com",
            },
          ],
        },
      };

    module.exports = nextConfig;
    
📸 Loading UI

Create **app/loading.tsx** :

    export default function Loading() {
      return <h1>Loading...</h1>;
    }
    
🎯 Learning Goals

    ♦️ Understand Server Components in Next.js
    ♦️ API fetching in App Router
    ♦️ Dynamic rendering of lists
    ♦️ Image optimization handling
    
👨‍💻 Author

Sahan Geesara







            
