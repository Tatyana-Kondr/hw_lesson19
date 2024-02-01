const texts = [
	{
		id: 1,
		text: "Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития."
	},
	{
		id: 2,
		text: "Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Таким образом реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий."
	},
	{
		id: 3,
		text: "Не следует, однако забывать, что сложившаяся структура организации позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации форм развития. Задача организации, в особенности же консультация с широким активом в значительной степени обуславливает создание форм развития. Задача организации, в особенности же консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач."
	},
	{
		id: 4,
		text: "Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Товарищи! сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции способствует подготовки и реализации соответствующий условий активизации. Таким образом укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития."
	},
    {
		id: 5,
		text: "Можно по-разному определять цель своего существования, но цель должна быть. Надо иметь и принципы в жизни. Одно правило в жизни должно быть у каждого человека, в его цели жизни, в его принципах жизни, в его поведении: надо прожить жизнь с достоинством, чтобы не стыдно было вспоминать."
	},
    {   id: 6,
		text: "…В Европе хитрый человек называется лисицей. Я был в Индии, там хитрого человека называют шакалом. Я был в Африке, там его называют змеёй. Вне зависимости от басен человека называют быком, козлом, ослом, теленком, зайцем, орлом, ласточкой. Почему это так? Почему животные, их повадки, их характеристики, их внешний образ становятся определениями характера человека? Да потому, что человек ощущает себя частью природы, частью всего, что живет на Земле. Без этого ему и холодно, и неуютно."}
];
const leftBtnNode = document.getElementById("left_btn");
const rightBtnNode = document.getElementById("right_btn");

const textContainerNode = document.querySelector(".text_container");
const currentTextNode = document.querySelector(".current_text");
const btnsContainerNode = document.querySelector(".btns");

let currentIndex = 0;

// Функция для обновления текущего текста на основе выбранной кнопки
function updateCurrentText(btnIndex) {
    const { text } = texts[btnIndex];
    currentTextNode.innerText = text;
}

// Создаем кнопки динамически на основе массива texts
texts.forEach((text, index) => {
    const button = document.createElement("button");
    button.innerText = `${index + 1} текст`;
    
    // Добавляем обработчик события клика для обновления текущего текста
    button.addEventListener("click", () => {
        // Удаляем класс активной кнопки у всех кнопок
        btnsContainerNode.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('btn_active');
        });
        // Добавляем класс активной кнопки к текущей кнопке
        button.classList.add('btn_active');

        currentIndex = index;
        updateCurrentText(currentIndex);
    });
    button.classList.add('btn_default');
    btnsContainerNode.appendChild(button);
});

// Начальная настройка с первым текстом
updateCurrentText(0);

// Обработчик события для кнопки влево
leftBtnNode.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    updateCurrentText(currentIndex); 
    updateActiveButton();  
});

// Обработчик события для кнопки вправо
rightBtnNode.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % texts.length;
    updateCurrentText(currentIndex);
    updateActiveButton();
});

function updateActiveButton() {
    const buttons = document.querySelectorAll('.btns button');
    buttons.forEach((button, index) => {
        if (index === currentIndex) {
            button.classList.add('btn_active');
        } else {
            button.classList.remove('btn_active');
        }
    });
}

// const btnsNodeList = document.querySelectorAll(".btns button");
// btnsNodeList.forEach(btnNode => {
//     btnNode.addEventListener("click", event => {
//         const btnIndex = [...btnsNodeList].indexOf(event.target);
//         const {text} = texts.find(({id}) => id === btnIndex + 1);
//         const currentTextNode = document.querySelector(".current_text");
//         currentTextNode.innerText = text;
//     })
// }) 

