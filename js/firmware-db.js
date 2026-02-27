// ⚠️ ВНИМАНИЕ: Этот файл нужно обновлять при добавлении новой прошивки!
// Просто добавьте новый объект в массив firmwareDatabase

const firmwareDatabase = [
    // ===== REDMI NOTE 15 =====
    {
        id: 'rn15-recovery-211',
        modelId: 'redmi-note-15',
        modelName: 'Redmi Note 15',
        modelCode: 'spinel',
        version: '2.0.211.0.VPGMIXM',
        date: '2026-01-15',
        type: 'Recovery',
        region: 'Global',
        android: '15',
        page: 'firmware/RedmiNote15-Recovery.html',
        image: '📱',
        isActive: true
    },
    {
        id: 'rn15-fastboot-211',
        modelId: 'redmi-note-15',
        modelName: 'Redmi Note 15',
        modelCode: 'spinel',
        version: '2.0.211.0.VPGMIXM',
        date: '2026-01-15',
        type: 'Fastboot',
        region: 'Global',
        android: '15',
        page: 'firmware/RedmiNote15-Fastboot.html',
        image: '📱',
        isActive: true
    },
    
    // ===== REDMI NOTE 14 =====
    {
        id: 'rn14-recovery-213',
        modelId: 'redmi-note-14',
        modelName: 'Redmi Note 14 4G',
        modelCode: 'tanzanite',
        version: '2.0.213.0.VOGEUXM',
        date: '2026-02-05',
        type: 'Recovery',
        region: 'EEA',
        android: '15',
        page: 'firmware/RedmiNote14-Recovery.html',
        image: '📱',
        isActive: true
    },
    
    // ===== REDMI 13C =====
    {
        id: 'r13c-recovery-204',
        modelId: 'redmi-13c',
        modelName: 'Redmi 13C',
        modelCode: 'gale',
        version: '2.0.204.0.VGPRUXM',
        date: '2026-02-11',
        type: 'Recovery',
        region: 'RU',
        android: '15',
        page: 'firmware/Redmi13C-Recovery.html',
        image: '📱',
        isActive: true
    }
];

// ============================================
// ВСЁ ОСТАЛЬНОЕ РАБОТАЕТ АВТОМАТИЧЕСКИ
// ============================================

// Сортируем по дате (новые сверху)
const sortedFirmware = [...firmwareDatabase].sort((a, b) => 
   