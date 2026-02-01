// Product Modal and 360° Viewer

class ProductModal {
    constructor() {
        this.modal = null;
        this.currentProduct = null;
        this.currentAngle = 0;
        this.autoRotateInterval = null;
        this.isAutoRotating = false;
        this.angles = [0, 45, 90, 135, 180, 225, 270, 315];
        this.currentAngleIndex = 0;

        this.init();
    }

    init() {
        this.createModalHTML();
        this.attachEventListeners();
    }

    createModalHTML() {
        const modalHTML = `
            <div class="product-modal" id="productModal">
                <div class="modal-content">
                    <button class="modal-close" onclick="productModal.close()">×</button>
                    
                    <div class="modal-body">
                        <!-- 3D Viewer Section -->
                        <div class="viewer-section">
                            <div class="product-viewer">
                                <div class="viewer-3d">
                                    <img id="product360Image" class="product-image-360" src="" alt="Product 360 View">
                                </div>
                                
                                <div class="rotation-controls">
                                    <button class="rotate-btn" onclick="productModal.rotateLeft()" title="Rotate Left">
                                        ←
                                    </button>
                                    <button class="rotate-btn" id="autoRotateBtn" onclick="productModal.toggleAutoRotate()" title="Auto Rotate">
                                        ⟲
                                    </button>
                                    <button class="rotate-btn" onclick="productModal.rotateRight()" title="Rotate Right">
                                        →
                                    </button>
                                </div>
                            </div>
                            
                            <div class="rotation-indicator">
                                ${this.angles.map((angle, index) =>
            `<div class="angle-dot ${index === 0 ? 'active' : ''}" onclick="productModal.setAngle(${index})"></div>`
        ).join('')}
                            </div>
                        </div>

                        <!-- Details Section -->
                        <div class="details-section">
                            <div class="product-badge" id="modalBadge">Featured</div>
                            <h2 class="modal-product-title" id="modalTitle">Product Name</h2>
                            <p class="modal-product-category" id="modalCategory">Category</p>

                            <!-- Tabs -->
                            <div class="modal-tabs">
                                <button class="modal-tab active" onclick="productModal.switchTab('specs')">Specifications</button>
                                <button class="modal-tab" onclick="productModal.switchTab('features')">Features</button>
                                <button class="modal-tab" onclick="productModal.switchTab('materials')">Materials</button>
                            </div>

                            <!-- Tab Content -->
                            <div id="specsTab" class="tab-content active">
                                <div class="specs-grid" id="specsGrid">
                                    <!-- Specs will be injected here -->
                                </div>
                            </div>

                            <div id="featuresTab" class="tab-content">
                                <ul class="feature-list" id="featuresList">
                                    <!-- Features will be injected here -->
                                </ul>
                            </div>

                            <div id="materialsTab" class="tab-content">
                                <div class="material-selector">
                                    <label class="selector-label">Available Materials:</label>
                                    <div class="material-options" id="materialOptions">
                                        <!-- Material options will be injected here -->
                                    </div>
                                </div>
                            </div>

                            <!-- Color Selector -->
                            <div class="color-selector">
                                <label class="selector-label">Select Color:</label>
                                <div class="color-options" id="colorOptions">
                                    <!-- Color options will be injected here -->
                                </div>
                            </div>

                            <!-- CTA Buttons -->
                            <div class="modal-cta">
                                <button class="modal-btn-primary" id="whatsappBtn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    Get Quote on WhatsApp
                                </button>
                                <button class="modal-btn-secondary" onclick="productModal.downloadSpec()">
                                    Download Specs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('productModal');
    }

    attachEventListeners() {
        // Close modal on backdrop click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });
    }

    open(productData) {
        this.currentProduct = productData;
        this.currentAngleIndex = 0;
        this.populateModal(productData);
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.stopAutoRotate();
    }

    populateModal(product) {
        // Set basic info
        document.getElementById('modalTitle').textContent = product.name;
        document.getElementById('modalCategory').textContent = product.category;
        document.getElementById('modalBadge').textContent = product.badge || 'Product';

        // Set initial image
        this.updateImage();

        // Populate specifications
        const specsGrid = document.getElementById('specsGrid');
        specsGrid.innerHTML = product.specs.map(spec => `
            <div class="spec-box">
                <div class="spec-label">${spec.label}</div>
                <div class="spec-value">${spec.value}</div>
            </div>
        `).join('');

        // Populate features
        const featuresList = document.getElementById('featuresList');
        featuresList.innerHTML = product.features.map(feature => `
            <li>${feature}</li>
        `).join('');

        // Populate colors
        const colorOptions = document.getElementById('colorOptions');
        colorOptions.innerHTML = product.colors.map((color, index) => `
            <div class="color-option ${index === 0 ? 'selected' : ''}" 
                 style="background: ${color.value}" 
                 onclick="productModal.selectColor(${index}, '${color.value}')"
                 title="${color.name}">
            </div>
        `).join('');

        // Populate materials
        const materialOptions = document.getElementById('materialOptions');
        materialOptions.innerHTML = product.materials.map((material, index) => `
            <div class="material-option ${index === 0 ? 'selected' : ''}" 
                 onclick="productModal.selectMaterial(${index}, '${material}')">
                ${material}
            </div>
        `).join('');

        // Set WhatsApp link
        const whatsappBtn = document.getElementById('whatsappBtn');
        const message = encodeURIComponent(`Hi, I'm interested in ${product.name}`);
        whatsappBtn.onclick = () => {
            window.open(`https://wa.me/919894060467?text=${message}`, '_blank');
        };
    }

    updateImage() {
        const img = document.getElementById('product360Image');
        const angle = this.angles[this.currentAngleIndex];

        // Use product images based on angle
        if (this.currentProduct.images && this.currentProduct.images[angle]) {
            img.src = this.currentProduct.images[angle];
        } else {
            // Fallback to main image
            img.src = this.currentProduct.mainImage;
        }

        // Update angle indicators
        document.querySelectorAll('.angle-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentAngleIndex);
        });
    }

    rotateLeft() {
        this.currentAngleIndex = (this.currentAngleIndex - 1 + this.angles.length) % this.angles.length;
        this.updateImage();
    }

    rotateRight() {
        this.currentAngleIndex = (this.currentAngleIndex + 1) % this.angles.length;
        this.updateImage();
    }

    setAngle(index) {
        this.currentAngleIndex = index;
        this.updateImage();
    }

    toggleAutoRotate() {
        const btn = document.getElementById('autoRotateBtn');

        if (this.isAutoRotating) {
            this.stopAutoRotate();
            btn.classList.remove('auto-rotate');
        } else {
            this.startAutoRotate();
            btn.classList.add('auto-rotate');
        }
    }

    startAutoRotate() {
        this.isAutoRotating = true;
        this.autoRotateInterval = setInterval(() => {
            this.rotateRight();
        }, 800);
    }

    stopAutoRotate() {
        this.isAutoRotating = false;
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
        }
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.modal-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        event.target.classList.add('active');

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}Tab`).classList.add('active');
    }

    selectColor(index, colorValue) {
        // Update selected state
        document.querySelectorAll('.color-option').forEach((option, i) => {
            option.classList.toggle('selected', i === index);
        });

        // In a real implementation, this would update the product image based on color
        console.log(`Selected color: ${colorValue}`);
    }

    selectMaterial(index, material) {
        // Update selected state
        document.querySelectorAll('.material-option').forEach((option, i) => {
            option.classList.toggle('selected', i === index);
        });

        // In a real implementation, this would update the product image based on material
        console.log(`Selected material: ${material}`);
    }

    downloadSpec() {
        // Generate a simple spec sheet
        const specs = this.currentProduct.specs.map(s => `${s.label}: ${s.value}`).join('\n');
        const content = `
${this.currentProduct.name}
Category: ${this.currentProduct.category}

SPECIFICATIONS:
${specs}

FEATURES:
${this.currentProduct.features.map((f, i) => `${i + 1}. ${f}`).join('\n')}

MATERIALS:
${this.currentProduct.materials.join(', ')}

Contact: +91 98940 60467
Website: www.akracks.com
        `.trim();

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.currentProduct.name.replace(/\s+/g, '_')}_Specs.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Initialize the modal
let productModal;
document.addEventListener('DOMContentLoaded', () => {
    productModal = new ProductModal();
});

// Sample product data structure
const sampleProducts = {
    'corner-rack': {
        name: 'Corner Rack',
        category: 'Supermarket Racks',
        badge: 'Popular',
        mainImage: 'assets/images/supermarket-racks.png',
        images: {
            0: 'assets/images/supermarket-racks.png',
            45: 'assets/images/gallery-1.png',
            90: 'assets/images/gallery-2.png',
            135: 'assets/images/gallery-3.png',
            180: 'assets/images/department-racks.png',
            225: 'assets/images/custom-racks.png',
            270: 'assets/images/vegetable-racks.png',
            315: 'assets/images/warehouse-racks.png'
        },
        specs: [
            { label: 'Height', value: '5ft - 7ft' },
            { label: 'Type', value: 'L-Shaped' },
            { label: 'Shelves', value: '5 Adjustable' },
            { label: 'Load Capacity', value: '150kg/shelf' }
        ],
        features: [
            'Heavy-duty MS steel construction',
            'Powder-coated finish for durability',
            'Adjustable shelf heights',
            'Easy assembly with bolt-less design',
            'Corner-optimized space utilization',
            'Multiple color options available'
        ],
        materials: ['MS Steel', 'Heavy Duty', 'Stainless Steel', 'Galvanized'],
        colors: [
            { name: 'Gray & Orange', value: 'linear-gradient(135deg, #808080 50%, #ff6b35 50%)' },
            { name: 'White & Blue', value: 'linear-gradient(135deg, #ffffff 50%, #3b82f6 50%)' },
            { name: 'Black & Gold', value: 'linear-gradient(135deg, #2d3436 50%, #ffd700 50%)' },
            { name: 'Green', value: '#2ecc71' }
        ]
    }
};

// Helper function to open modal with product ID
function openProductModal(productId) {
    if (productModal && sampleProducts[productId]) {
        productModal.open(sampleProducts[productId]);
    }
}
