import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [vehicleType, setVehicleType] = useState('sedan');
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step1Error, setStep1Error] = useState('');

  const daysInMonth = 31;
  const startDay = 5; // Friday for Oct 2026
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: startDay }, (_, i) => i);
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const times = ['08:00 AM', '10:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'];

  const handleStep1Continue = () => {
    if (!name || !emailOrPhone || !password || !make || !model) {
      setStep1Error('Please fill in all fields to create your account and proceed.');
      return;
    }
    setStep1Error('');
    setStep(2);
  };

  return (
    <section id="booking" className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Book Your Wash</h2>
          <p className="text-white/60">Schedule your premium detailing service in seconds.</p>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
            <motion.div 
              className="h-full bg-electric"
              initial={{ width: '33%' }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="mb-8 flex justify-between text-sm font-medium text-white/40">
            <span className={step >= 1 ? 'text-electric' : ''}>Details</span>
            <span className={step >= 2 ? 'text-electric' : ''}>Date & Time</span>
            <span className={step >= 3 ? 'text-electric' : ''}>Confirm</span>
          </div>

          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {step1Error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {step1Error}
                </div>
              )}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" 
                  placeholder="e.g. John Doe" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email or Phone</label>
                  <input 
                    type="text" 
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" 
                    placeholder="For account creation" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Password</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" 
                    placeholder="Create a password" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Make</label>
                  <input 
                    type="text" 
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" 
                    placeholder="e.g. Porsche" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Model</label>
                  <input 
                    type="text" 
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" 
                    placeholder="e.g. 911" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Vehicle Type</label>
                <select 
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors appearance-none"
                >
                  <option value="sedan" className="bg-obsidian">Sedan / Coupe</option>
                  <option value="suv" className="bg-obsidian">SUV / Truck</option>
                  <option value="exotic" className="bg-obsidian">Exotic / Supercar</option>
                </select>
              </div>
              <Button 
                variant="primary" 
                className="w-full mt-8" 
                onClick={handleStep1Continue}
              >
                Continue
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Calendar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">October 2026</h3>
                    <div className="flex gap-2">
                      <button className="p-1 hover:text-electric transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                      <button className="p-1 hover:text-electric transition-colors"><ChevronRight className="w-5 h-5" /></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs text-white/40 font-medium">
                    {weekDays.map(day => <div key={day}>{day}</div>)}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {blanks.map(b => <div key={`blank-${b}`} className="aspect-square" />)}
                    {days.map(day => (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`aspect-square rounded-full flex items-center justify-center text-sm transition-all ${
                          selectedDate === day 
                            ? 'bg-electric text-obsidian font-bold' 
                            : 'hover:bg-white/10 text-white/80'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <h3 className="font-medium mb-4">Available Times</h3>
                  <div className="space-y-2">
                    {times.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`w-full py-3 px-4 rounded-xl border text-sm transition-all text-left ${
                          selectedTime === time
                            ? 'border-electric bg-electric/10 text-electric'
                            : 'border-white/10 hover:border-white/30 text-white/80'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button variant="secondary" className="w-1/3" onClick={() => setStep(1)}>Back</Button>
                <Button 
                  variant="primary" 
                  className="w-2/3" 
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                >
                  Continue
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 text-center">
              <div className="w-16 h-16 bg-electric/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-electric rounded-full" />
              </div>
              <h3 className="text-2xl font-display font-bold">Almost there, {name.split(' ')[0]}!</h3>
              <p className="text-white/60">Review your details and confirm your booking.</p>
              
              <div className="bg-white/5 rounded-xl p-6 text-left space-y-3 my-8">
                <div className="flex justify-between"><span className="text-white/60">Name:</span><span className="font-medium">{name}</span></div>
                <div className="flex justify-between"><span className="text-white/60">Vehicle:</span><span className="font-medium">{make} {model}</span></div>
                <div className="flex justify-between"><span className="text-white/60">Date:</span><span className="font-medium">Oct {selectedDate}, 2026</span></div>
                <div className="flex justify-between"><span className="text-white/60">Time:</span><span className="font-medium">{selectedTime}</span></div>
              </div>

              <div className="flex gap-4">
                <Button variant="secondary" className="w-1/3" onClick={() => setStep(2)}>Back</Button>
                <Button variant="primary" className="w-2/3" onClick={() => setStep(4)}>Confirm Booking</Button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <div className="w-24 h-24 bg-electric/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-12 h-12 bg-electric rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-obsidian" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Booking Confirmed!</h3>
              <p className="text-white/60 mb-8 max-w-sm mx-auto">Your premium detailing session is scheduled. We've sent a confirmation email with the details.</p>
              <Button variant="outline" onClick={() => {
                setStep(1);
                setName('');
                setMake('');
                setModel('');
                setSelectedDate(null);
                setSelectedTime(null);
              }}>Book Another Wash</Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
