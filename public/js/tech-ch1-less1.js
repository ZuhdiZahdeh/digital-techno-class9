 document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.querySelector('.open-modal-btn');
    const modal = document.getElementById('energy-modal');
    const overlay = document.getElementById('energy-modal-overlay');
    const closeBtn = document.querySelector('.close-modal-btn');
    const energyGrid = document.getElementById('energyGrid');
    const searchInput = document.getElementById('search');

    // بيانات أنواع الطاقة
    const ENERGY_TYPES = [
        {
            id: 'kinetic',
            name: 'الطاقة الحركية',
            definition: 'الطاقة التي يمتلكها الجسم بسبب حركته. تزداد هذه الطاقة بزيادة سرعة الجسم وكتلته.',
            examples: ['سيارة تسير على الطريق', 'رياح تهب'],
            questions: [{ question: 'الطاقة الحركية تزداد بزيادة سرعة الجسم؟', answer: 'نعم، تتناسب طردياً مع مربع السرعة.', type: 'صح/خطأ' }],
            icon: '🚗'
        },
        // سيتم إضافة باقي أنواع الطاقة هنا بنفس النمط
        {
            id: 'potential',
            name: 'الطاقة الكامنة',
            definition: 'الطاقة المخزنة في الجسم بسبب موضعه أو شكله.',
            examples: ['سد مائي', 'نابض مضغوط'],
            questions: [{ question: 'الطاقة الكامنة الثقالية تعتمد على كتلة الجسم وارتفاعه؟', answer: 'نعم.', type: 'صح/خطأ' }],
            icon: '🏞️'
        },
    ];

    // وظيفة لإنشاء بطاقات الطاقة
    function createEnergyCards(energyTypes) {
        energyGrid.innerHTML = '';
        energyTypes.forEach(energy => {
            const card = document.createElement('div');
            card.className = 'energy-card';
            card.innerHTML = `
                <div class="energy-icon">${energy.icon}</div>
                <h3>${energy.name}</h3>
            `;
            card.addEventListener('click', () => openCardDetails(energy));
            energyGrid.appendChild(card);
        });
    }

    // وظيفة لفتح تفاصيل البطاقة
    function openCardDetails(energy) {
        // هنا يمكنك بناء نافذة منبثقة أخرى بتفاصيل كل نوع من أنواع الطاقة
        alert(`تفاصيل ${energy.name}:\n\nالتعريف: ${energy.definition}\nالأمثلة: ${energy.examples.join(', ')}`);
    }

    // فتح الملحق (النافذة المنبثقة)
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        createEnergyCards(ENERGY_TYPES); // ملء البطاقات عند الفتح
    });

    // إغلاق الملحق (النافذة المنبثقة)
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });

    // البحث في البطاقات
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredEnergy = ENERGY_TYPES.filter(energy => 
            energy.name.toLowerCase().includes(searchTerm)
        );
        createEnergyCards(filteredEnergy);
    });
});