import React, { useState } from 'react';
import { X, Send, User, GraduationCap, BookOpen, Phone, MessageSquare, Info } from 'lucide-react';

function CounselingForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-scale-up">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">Apply for Counseling</h2>
            <p className="text-sm text-gray-500 mt-1">Fill in the details to transform your child's future</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form 
          action="https://formspree.io/f/xvgzlowz" // Note: User needs to replace this with their unique Formspree ID or I can use mailto
          method="POST"
          className="p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <User size={16} className="text-orange-500" />
                Student Name
              </label>
              <input
                type="text"
                name="studentName"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Standard */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <GraduationCap size={16} className="text-orange-500" />
                Standard / Grade
              </label>
              <input
                type="text"
                name="standard"
                placeholder="e.g. 10th Standard"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Past Education */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <BookOpen size={16} className="text-orange-500" />
                Past Education
              </label>
              <input
                type="text"
                name="pastEducation"
                placeholder="Previous School / Marks"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <BookOpen size={16} className="text-orange-500" />
                Interested Subjects
              </label>
              <input
                type="text"
                name="subject"
                placeholder="e.g. Science, Maths"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Contact Number */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Phone size={16} className="text-orange-500" />
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNo"
                placeholder="+91 XXXXX XXXXX"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Why Join */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <MessageSquare size={16} className="text-orange-500" />
                Why do you want to join DVM High School?
              </label>
              <textarea
                name="whyJoin"
                rows="3"
                placeholder="Tell us about your goals..."
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Necessary Details */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Info size={16} className="text-orange-500" />
                Other Necessary Details
              </label>
              <textarea
                name="additionalDetails"
                rows="2"
                placeholder="Any other information we should know?"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-3 group"
          >
            Submit Application
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-4">
            Your data is secure. We will contact you within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
}

export default CounselingForm;
