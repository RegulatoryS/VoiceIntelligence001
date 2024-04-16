exports.handler = function(context, event, callback) {
  
    const twiml = new Twilio.twiml.VoiceResponse();
    console.log(`User pressed ${event.Digits}`);
  
    if (event.Digits === "1") {
      twiml.gather({
          input: 'dtmf',
          timeout: 10,
          finishOnKey: '#',
          action: 'https://gathervoiceintelligent-4888.twil.io/confirmar-numero'
      }).say({ language: 'es-MX', voice: 'Polly.Andres-Neural' }, "Cotizaremos tu seguro. Por favor, ingresa tu número DOT seguido de la tecla de número.");
  
      // Si no se ingresa ningún número en el tiempo especificado, se redirige a la acción para manejarlo
      twiml.redirect({ method: 'POST' }, 'https://gathervoiceintelligent-4888.twil.io/no-input');
    }
    else if (event.Digits === "2") {
      twiml.say({ language: 'es-MX', voice: 'Polly.Andres-Neural' }, "Para crear tu nuevo logo usamos inteligencia artificial. El valor de tu nuevo logo es de 50 dólares. El pago inicial es de 10 dólares y te entregaremos 5 opciones de logo con marcas de agua para que elijas... Si deseas tu logo finalizado, paga los 40 dólares restantes. Di QUIERO MI LOGO para iniciar o presiona cero para finalizar la llamada.");
    }
    else if (event.Digits === "3") {
      twiml.say({ language: 'es-MX', voice: 'Polly.Andres-Neural' }, "Repetiremos las opciones. Si quieres cotizar tu seguro marca 1, si quieres realizar tu logo marca 2.");
    }
    else if (event.Digits === "4") {
      twiml.say({ language: 'es-MX', voice: 'Polly.Andres-Neural' }, "Gracias por usar nuestros servicios. ¡Que tengas un buen día!");
      twiml.hangup();
    }
    return callback(null, twiml);
  };
