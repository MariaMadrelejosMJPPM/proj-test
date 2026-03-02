    // stations
    const stations = [
        "North Avenue",
        "Quezon Avenue",
        "Kamuning",
        "Araneta Center-Cubao",
        "Santolan-Annapolis",
        "Ortigas",
        "Shaw Boulevard",
        "Boni",
        "Guadalupe",
        "Ayala",
        "Magallanes",
        "Taft Avenue"
    ];

    // fare config
    const FARE_CONFIG = {
        BASE_FARE: 50,
        PER_STOP_RATE: 25,
        DISCOUNT_RATE: 0.20
    };

    // number of stops
    function calculateStops(fromStation, toStation) {
        console.log('From:', fromStation);
        console.log('To:', toStation);
        
        const fromIndex = stations.indexOf(fromStation);
        const toIndex = stations.indexOf(toStation);
        
        console.log('From Index:', fromIndex);
        console.log('To Index:', toIndex);

        if (fromIndex === -1 || toIndex === -1) {
            throw new Error('Invalid station selected! Station not found in list.');
        }

        const stops = Math.abs(toIndex - fromIndex);
        console.log('Stops calculated:', stops);
        return stops;
    }

    // Calculate regular fare
    function calculateRegularFare() {
        console.log('Calculate Regular Fare clicked');
        
        const fromStation = document.getElementById('fromStation').value;
        const toStation = document.getElementById('toStation').value;

        console.log('Selected From:', fromStation);
        console.log('Selected To:', toStation);

        if (!fromStation || !toStation) {
            alert('Please select both Pick-Up and Drop-Off locations!');
            return;
        }

        if (fromStation === toStation) {
            alert('Pick-Up and Drop-Off locations must be different!');
            return;
        }

        try {
            const stops = calculateStops(fromStation, toStation);
            const fare = FARE_CONFIG.BASE_FARE + (stops * FARE_CONFIG.PER_STOP_RATE);
            
            console.log('Fare calculated:', fare);

            displayFareResult(fromStation, toStation, fare, stops, 'Regular');
        } catch (error) {
            console.error('Error:', error.message);
            alert(error.message);
        }
    }

    // discounted fare (20% off)
    function calculateDiscountedFare() {
        console.log('Calculate Discounted Fare clicked');
        
        const fromStation = document.getElementById('fromStation').value;
        const toStation = document.getElementById('toStation').value;

        console.log('Selected From:', fromStation);
        console.log('Selected To:', toStation);

        if (!fromStation || !toStation) {
            alert('Please select both Pick-Up and Drop-Off locations!');
            return;
        }

        if (fromStation === toStation) {
            alert('Pick-Up and Drop-Off locations must be different!');
            return;
        }

        try {
            const stops = calculateStops(fromStation, toStation);
            const regularFare = FARE_CONFIG.BASE_FARE + (stops * FARE_CONFIG.PER_STOP_RATE);
            const discountedFare = Math.ceil(regularFare * (1 - FARE_CONFIG.DISCOUNT_RATE));
            
            console.log('Regular Fare:', regularFare);
            console.log('Discounted Fare:', discountedFare);

            displayFareResult(fromStation, toStation, discountedFare, stops, 'Discounted (20% off', regularFare);
        } catch (error) {
            console.error('Error:', error.message);
            alert(error.message);
        }
    }

    // Display fare result
    function displayFareResult(fromStation, toStation, fare, stops, fareType, originalFare = null) {
        document.getElementById('routeInfo').textContent = `${fromStation} → ${toStation}`;
        document.getElementById('stopsInfo').textContent = stops;

        let fareDisplay = `₱${fare}`;
        if (originalFare) {
            const savings = originalFare - fare;
            fareDisplay = `₱${fare} <span style="font-size: 14px; color: #999;"><s>₱${originalFare}</s></span> (${fareType})`;
        } else {
            fareDisplay = `₱${fare} (${fareType})`;
        }

        document.getElementById('fareAmount').innerHTML = fareDisplay;
        document.getElementById('fareResult').style.display = 'block';
        
        console.log('Result displayed');
    }

// sources
// https://www.w3schools.com/jsref/jsref_forEach.asp
// https://www.w3schools.com/js/js_array_methods.asp
// https://www.w3schools.com/js/js_string_templates.asp
// https://www.w3schools.com/js/js_math.asp
// https://www.w3schools.com/js/js_function_parameters.asp
// https://www.w3schools.com/js/js_function_return.asp