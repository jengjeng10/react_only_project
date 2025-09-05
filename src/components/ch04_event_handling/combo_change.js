

function ComboChange() {
    const [category, setCategory] = useState('');

    const [selectedItem, setSelectedItem] = useState(null);
    //croissant
    const itemData = {
        빵: [
            { name: 크루아상, img: '/images/croissant_02.png' },
            { name: 브리오슈, img: '/images/brioche_01.png' },
            { name: 치아바타, img: '/images/ciabatta_01.png' },
        ],
        음료수: [
            { name: 사이다, img: '/images/sida.png' },
            { name: 콜라, img: '/image/cola.png' },
            { name: 주스, img: '/image/juice.png' },
        ],
    };




    return (
        <div className="App">
        </div>
    );
}

export default App;
