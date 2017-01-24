// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Interval');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.year[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.month[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.day[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.hour[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.minute[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.sec[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.sec",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.second[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.milli[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$,that);
} else {
var m__7073__auto____$1 = (cljs_time.core.equal_QMARK_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.equal?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$,that);
} else {
var m__7073__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$,that);
} else {
var m__7073__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.plus_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$,period);
} else {
var m__7073__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.minus_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$,period);
} else {
var m__7073__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$,period);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-millis",this$);
}
}
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-seconds",this$);
}
}
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-minutes",this$);
}
}
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-hours",this$);
}
}
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.in_days[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-days",this$);
}
}
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-weeks",this$);
}
}
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.in_months[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-months",this$);
}
}
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__7072__auto__ = (((this$ == null))?null:this$);
var m__7073__auto__ = (cljs_time.core.in_years[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,this$);
} else {
var m__7073__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"InTimeUnitProtocol.in-years",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k33805,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__33807 = (((k33805 instanceof cljs.core.Keyword))?k33805.fqn:null);
switch (G__33807) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33805,else__7034__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#cljs-time.core.Interval{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33804){
var self__ = this;
var G__33804__$1 = this;
return (new cljs.core.RecordIter((0),G__33804__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__33804){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__33808 = cljs.core.keyword_identical_QMARK_;
var expr__33809 = k__7039__auto__;
if(cljs.core.truth_(pred__33808.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__33809))){
return (new cljs_time.core.Interval(G__33804,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33808.call(null,new cljs.core.Keyword(null,"end","end",-268185958),expr__33809))){
return (new cljs_time.core.Interval(self__.start,G__33804,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__33804),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end","end",-268185958),self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__33804){
var self__ = this;
var this__7030__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__33804,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__33806){
return (new cljs_time.core.Interval(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__33806),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__33806),null,cljs.core.dissoc.call(null,G__33806,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"end","end",-268185958)),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error("Assert failed: (<= (.getTime start) (.getTime end))"));
}

return cljs_time.core.__GT_Interval.call(null,start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7031__auto__,k__7032__auto__){
var self__ = this;
var this__7031__auto____$1 = this;
return cljs.core._lookup.call(null,this__7031__auto____$1,k__7032__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7033__auto__,k33813,else__7034__auto__){
var self__ = this;
var this__7033__auto____$1 = this;
var G__33815 = (((k33813 instanceof cljs.core.Keyword))?k33813.fqn:null);
switch (G__33815) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33813,else__7034__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7045__auto__,writer__7046__auto__,opts__7047__auto__){
var self__ = this;
var this__7045__auto____$1 = this;
var pr_pair__7048__auto__ = ((function (this__7045__auto____$1){
return (function (keyval__7049__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,cljs.core.pr_writer,""," ","",opts__7047__auto__,keyval__7049__auto__);
});})(this__7045__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7046__auto__,pr_pair__7048__auto__,"#cljs-time.core.Period{",", ","}",opts__7047__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33812){
var self__ = this;
var G__33812__$1 = this;
return (new cljs.core.RecordIter((0),G__33812__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7029__auto__){
var self__ = this;
var this__7029__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7025__auto__){
var self__ = this;
var this__7025__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7035__auto__){
var self__ = this;
var this__7035__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7026__auto__){
var self__ = this;
var this__7026__auto____$1 = this;
var h__6844__auto__ = self__.__hash;
if(!((h__6844__auto__ == null))){
return h__6844__auto__;
} else {
var h__6844__auto____$1 = cljs.core.hash_imap.call(null,this__7026__auto____$1);
self__.__hash = h__6844__auto____$1;

return h__6844__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7027__auto__,other__7028__auto__){
var self__ = this;
var this__7027__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6397__auto__ = other__7028__auto__;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (this__7027__auto____$1.constructor === other__7028__auto__.constructor);
if(and__6397__auto____$1){
return cljs.core.equiv_map.call(null,this__7027__auto____$1,other__7028__auto__);
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7040__auto__,k__7041__auto__){
var self__ = this;
var this__7040__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null,new cljs.core.Keyword(null,"millis","millis",-1338288387),null], null), null),k__7041__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7040__auto____$1),self__.__meta),k__7041__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7041__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7038__auto__,k__7039__auto__,G__33812){
var self__ = this;
var this__7038__auto____$1 = this;
var pred__33816 = cljs.core.keyword_identical_QMARK_;
var expr__33817 = k__7039__auto__;
if(cljs.core.truth_(pred__33816.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),expr__33817))){
return (new cljs_time.core.Period(G__33812,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33816.call(null,new cljs.core.Keyword(null,"months","months",-45571637),expr__33817))){
return (new cljs_time.core.Period(self__.years,G__33812,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33816.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),expr__33817))){
return (new cljs_time.core.Period(self__.years,self__.months,G__33812,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33816.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),expr__33817))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__33812,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33816.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),expr__33817))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__33812,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33816.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),expr__33817))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__33812,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33816.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),expr__33817))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__33812,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33816.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),expr__33817))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__33812,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7039__auto__,G__33812),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7043__auto__){
var self__ = this;
var this__7043__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"years","years",-1298579689),self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"months","months",-45571637),self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weeks","weeks",1844596125),self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"days","days",-1394072564),self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hours","hours",58380855),self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"minutes","minutes",1319166394),self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seconds","seconds",-445266194),self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"millis","millis",-1338288387),self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7030__auto__,G__33812){
var self__ = this;
var this__7030__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__33812,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7036__auto__,entry__7037__auto__){
var self__ = this;
var this__7036__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7037__auto__)){
return cljs.core._assoc.call(null,this__7036__auto____$1,cljs.core._nth.call(null,entry__7037__auto__,(0)),cljs.core._nth.call(null,entry__7037__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7036__auto____$1,entry__7037__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"years","years",341951838,null),new cljs.core.Symbol(null,"months","months",1594959890,null),new cljs.core.Symbol(null,"weeks","weeks",-809839644,null),new cljs.core.Symbol(null,"days","days",246458963,null),new cljs.core.Symbol(null,"hours","hours",1698912382,null),new cljs.core.Symbol(null,"minutes","minutes",-1335269375,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"millis","millis",302243140,null)], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__7065__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__7065__auto__,writer__7066__auto__){
return cljs.core._write.call(null,writer__7066__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__33814){
return (new cljs_time.core.Period(new cljs.core.Keyword(null,"years","years",-1298579689).cljs$core$IFn$_invoke$arity$1(G__33814),new cljs.core.Keyword(null,"months","months",-45571637).cljs$core$IFn$_invoke$arity$1(G__33814),new cljs.core.Keyword(null,"weeks","weeks",1844596125).cljs$core$IFn$_invoke$arity$1(G__33814),new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$1(G__33814),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(G__33814),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(G__33814),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(G__33814),new cljs.core.Keyword(null,"millis","millis",-1338288387).cljs$core$IFn$_invoke$arity$1(G__33814),null,cljs.core.dissoc.call(null,G__33814,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"millis","millis",-1338288387)),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var args33820 = [];
var len__7484__auto___33826 = arguments.length;
var i__7485__auto___33827 = (0);
while(true){
if((i__7485__auto___33827 < len__7484__auto___33826)){
args33820.push((arguments[i__7485__auto___33827]));

var G__33828 = (i__7485__auto___33827 + (1));
i__7485__auto___33827 = G__33828;
continue;
} else {
}
break;
}

var G__33825 = args33820.length;
switch (G__33825) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args33820.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period.call(null,cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,cljs_time.core.period.call(null,p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq33821){
var G__33822 = cljs.core.first.call(null,seq33821);
var seq33821__$1 = cljs.core.next.call(null,seq33821);
var G__33823 = cljs.core.first.call(null,seq33821__$1);
var seq33821__$2 = cljs.core.next.call(null,seq33821__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__33822,G__33823,seq33821__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);

cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
set_fn.call(null,date__$1,op.call(null,f.call(null,date__$1),value));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"millis","millis",-1338288387),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__33830_SHARP_,p2__33831_SHARP_){
return p1__33830_SHARP_.setMilliseconds(p2__33831_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"seconds","seconds",-445266194),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__33832_SHARP_,p2__33833_SHARP_){
return p1__33832_SHARP_.setSeconds(p2__33833_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"minutes","minutes",1319166394),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__33834_SHARP_,p2__33835_SHARP_){
return p1__33834_SHARP_.setMinutes(p2__33835_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"hours","hours",58380855),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__33836_SHARP_,p2__33837_SHARP_){
return p1__33836_SHARP_.setHours(p2__33837_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"days","days",-1394072564),cljs.core.partial.call(null,fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__33838_SHARP_,p2__33839_SHARP_){
return p1__33838_SHARP_.setDate(p2__33839_SHARP_);
});})(fixed_time_fn))
),new cljs.core.Keyword(null,"weeks","weeks",1844596125),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate(op.call(null,cljs_time.core.day.call(null,date__$1),((7) * value)));
} else {
}

return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"months","months",-45571637),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_33840 = op.call(null,(0),value);
var i_33841 = (new goog.date.Interval(goog.date.Interval.MONTHS,m_33840));
date__$1.add(i_33841);
} else {
}

return date__$1;
});})(fixed_time_fn))
,new cljs.core.Keyword(null,"years","years",-1298579689),((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs_time.internal.core.leap_year_QMARK_.call(null,cljs_time.core.year.call(null,date__$1));
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = cljs_time.core._EQ_.call(null,(2),cljs_time.core.month.call(null,date__$1));
if(cljs.core.truth_(and__6397__auto____$1)){
return cljs_time.core._EQ_.call(null,(29),cljs_time.core.day.call(null,date__$1));
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear(op.call(null,cljs_time.core.year.call(null,date__$1),value));
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
return cljs.core.reduce.call(null,(function (d,p__33846){
var vec__33847 = p__33846;
var k = cljs.core.nth.call(null,vec__33847,(0),null);
var v = cljs.core.nth.call(null,vec__33847,(1),null);
return cljs_time.core.periods.call(null,k).call(null,operator,d,v);
}),date,p);
});
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_(cljs_time.core._EQ_.call(null,d,(0)))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn.call(null,period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_.call(null,(new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),(1)));
});
cljs_time.core.utc = ({"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY});
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return Date.now();
});
});
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return (Date.now() + offset);
});
});
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
});
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn.call(null);
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
var G__33851 = (new goog.date.UtcDateTime());
G__33851.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__33851;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__33853 = (new goog.date.DateTime());
G__33853.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__33853;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__33855 = datetime__$1;
G__33855.setHours((0));

G__33855.setMinutes((0));

G__33855.setSeconds((0));

G__33855.setMilliseconds((0));

return G__33855;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight.call(null,cljs_time.core.now.call(null));
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__33857 = (new goog.date.UtcDateTime());
G__33857.setTime((0));

return G__33857;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var args33858 = [];
var len__7484__auto___33861 = arguments.length;
var i__7485__auto___33862 = (0);
while(true){
if((i__7485__auto___33862 < len__7484__auto___33861)){
args33858.push((arguments[i__7485__auto___33862]));

var G__33863 = (i__7485__auto___33862 + (1));
i__7485__auto___33862 = G__33863;
continue;
} else {
}
break;
}

var G__33860 = args33858.length;
switch (G__33860) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33858.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.call(null,year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.call(null,year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;

/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var args33865 = [];
var len__7484__auto___33868 = arguments.length;
var i__7485__auto___33869 = (0);
while(true){
if((i__7485__auto___33869 < len__7484__auto___33868)){
args33865.push((arguments[i__7485__auto___33869]));

var G__33870 = (i__7485__auto___33869 + (1));
i__7485__auto___33869 = G__33870;
continue;
} else {
}
break;
}

var G__33867 = args33865.length;
switch (G__33867) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33865.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var args33872 = [];
var len__7484__auto___33875 = arguments.length;
var i__7485__auto___33876 = (0);
while(true){
if((i__7485__auto___33876 < len__7484__auto___33875)){
args33872.push((arguments[i__7485__auto___33876]));

var G__33877 = (i__7485__auto___33876 + (1));
i__7485__auto___33876 = G__33877;
continue;
} else {
}
break;
}

var G__33874 = args33872.length;
switch (G__33874) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33872.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.call(null,year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.call(null,year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.call(null,year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.call(null,year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month, and day. Does not deal with timezones.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new local DateTime representing today's date.
 *   local DateTime objects do not deal with timezones at all.
 */
cljs_time.core.today = (function cljs_time$core$today(){
var G__33880 = (new goog.date.Date());
G__33880.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__33880;
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var args33881 = [];
var len__7484__auto___33884 = arguments.length;
var i__7485__auto___33885 = (0);
while(true){
if((i__7485__auto___33885 < len__7484__auto___33884)){
args33881.push((arguments[i__7485__auto___33885]));

var G__33886 = (i__7485__auto___33885 + (1));
i__7485__auto___33885 = G__33886;
continue;
} else {
}
break;
}

var G__33883 = args33881.length;
switch (G__33883) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33881.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.call(null,hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?new cljs.core.Keyword(null,"-","-",-2112348439):new cljs.core.Keyword(null,"+","+",1913524883));
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1,minutes):cljs_time.internal.core.format.call(null,fmt,cljs.core.name.call(null,sign),hours__$1));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),tz_name,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__6409__auto__ = minutes;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})(),(0)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),"-",new cljs.core.Keyword(null,"names","names",-1943074658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs-time.core","time-zone","cljs-time.core/time-zone",751963705)], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;

/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__33889 = (new goog.date.DateTime());
G__33889.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__33889;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.call(null,(hours | (0)),cljs.core.mod.call(null,hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to in the default
 *   (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(var_args){
var args33890 = [];
var len__7484__auto___33893 = arguments.length;
var i__7485__auto___33894 = (0);
while(true){
if((i__7485__auto___33894 < len__7484__auto___33893)){
args33890.push((arguments[i__7485__auto___33894]));

var G__33895 = (i__7485__auto___33894 + (1));
i__7485__auto___33894 = G__33895;
continue;
} else {
}
break;
}

var G__33892 = args33890.length;
switch (G__33892) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33890.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.call(null,null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(var_args){
var args33897 = [];
var len__7484__auto___33900 = arguments.length;
var i__7485__auto___33901 = (0);
while(true){
if((i__7485__auto___33901 < len__7484__auto___33900)){
args33897.push((arguments[i__7485__auto___33901]));

var G__33902 = (i__7485__auto___33901 + (1));
i__7485__auto___33901 = G__33902;
continue;
} else {
}
break;
}

var G__33899 = args33897.length;
switch (G__33899) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33897.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.call(null,null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"months","months",-45571637),n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var args33904 = [];
var len__7484__auto___33907 = arguments.length;
var i__7485__auto___33908 = (0);
while(true){
if((i__7485__auto___33908 < len__7484__auto___33907)){
args33904.push((arguments[i__7485__auto___33908]));

var G__33909 = (i__7485__auto___33908 + (1));
i__7485__auto___33908 = G__33909;
continue;
} else {
}
break;
}

var G__33906 = args33904.length;
switch (G__33906) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33904.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.call(null,null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(var_args){
var args33911 = [];
var len__7484__auto___33914 = arguments.length;
var i__7485__auto___33915 = (0);
while(true){
if((i__7485__auto___33915 < len__7484__auto___33914)){
args33911.push((arguments[i__7485__auto___33915]));

var G__33916 = (i__7485__auto___33915 + (1));
i__7485__auto___33915 = G__33916;
continue;
} else {
}
break;
}

var G__33913 = args33911.length;
switch (G__33913) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33911.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.call(null,null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var args33918 = [];
var len__7484__auto___33921 = arguments.length;
var i__7485__auto___33922 = (0);
while(true){
if((i__7485__auto___33922 < len__7484__auto___33921)){
args33918.push((arguments[i__7485__auto___33922]));

var G__33923 = (i__7485__auto___33922 + (1));
i__7485__auto___33922 = G__33923;
continue;
} else {
}
break;
}

var G__33920 = args33918.length;
switch (G__33920) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33918.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.call(null,null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var args33925 = [];
var len__7484__auto___33928 = arguments.length;
var i__7485__auto___33929 = (0);
while(true){
if((i__7485__auto___33929 < len__7484__auto___33928)){
args33925.push((arguments[i__7485__auto___33929]));

var G__33930 = (i__7485__auto___33929 + (1));
i__7485__auto___33929 = G__33930;
continue;
} else {
}
break;
}

var G__33927 = args33925.length;
switch (G__33927) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33925.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.call(null,null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var args33932 = [];
var len__7484__auto___33935 = arguments.length;
var i__7485__auto___33936 = (0);
while(true){
if((i__7485__auto___33936 < len__7484__auto___33935)){
args33932.push((arguments[i__7485__auto___33936]));

var G__33937 = (i__7485__auto___33936 + (1));
i__7485__auto___33936 = G__33937;
continue;
} else {
}
break;
}

var G__33934 = args33932.length;
switch (G__33934) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33932.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.call(null,null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var args33939 = [];
var len__7484__auto___33942 = arguments.length;
var i__7485__auto___33943 = (0);
while(true){
if((i__7485__auto___33943 < len__7484__auto___33942)){
args33939.push((arguments[i__7485__auto___33943]));

var G__33944 = (i__7485__auto___33943 + (1));
i__7485__auto___33943 = G__33944;
continue;
} else {
}
break;
}

var G__33941 = args33939.length;
switch (G__33941) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33939.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.call(null,null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;

/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var args33946 = [];
var len__7484__auto___33952 = arguments.length;
var i__7485__auto___33953 = (0);
while(true){
if((i__7485__auto___33953 < len__7484__auto___33952)){
args33946.push((arguments[i__7485__auto___33953]));

var G__33954 = (i__7485__auto___33953 + (1));
i__7485__auto___33953 = G__33954;
continue;
} else {
}
break;
}

var G__33951 = args33946.length;
switch (G__33951) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args33946.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_.call(null,dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq33947){
var G__33948 = cljs.core.first.call(null,seq33947);
var seq33947__$1 = cljs.core.next.call(null,seq33947);
var G__33949 = cljs.core.first.call(null,seq33947__$1);
var seq33947__$2 = cljs.core.next.call(null,seq33947__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__33948,G__33949,seq33947__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var args33956 = [];
var len__7484__auto___33962 = arguments.length;
var i__7485__auto___33963 = (0);
while(true){
if((i__7485__auto___33963 < len__7484__auto___33962)){
args33956.push((arguments[i__7485__auto___33963]));

var G__33964 = (i__7485__auto___33963 + (1));
i__7485__auto___33963 = G__33964;
continue;
} else {
}
break;
}

var G__33961 = args33956.length;
switch (G__33961) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args33956.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_.call(null,dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq33957){
var G__33958 = cljs.core.first.call(null,seq33957);
var seq33957__$1 = cljs.core.next.call(null,seq33957);
var G__33959 = cljs.core.first.call(null,seq33957__$1);
var seq33957__$2 = cljs.core.next.call(null,seq33957__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__33958,G__33959,seq33957__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago.call(null,cljs_time.core.days.call(null,(1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var args33966 = [];
var len__7484__auto___33969 = arguments.length;
var i__7485__auto___33970 = (0);
while(true){
if((i__7485__auto___33970 < len__7484__auto___33969)){
args33966.push((arguments[i__7485__auto___33970]));

var G__33971 = (i__7485__auto___33970 + (1));
i__7485__auto___33970 = G__33971;
continue;
} else {
}
break;
}

var G__33968 = args33966.length;
switch (G__33968) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33966.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var args33973 = [];
var len__7484__auto___33976 = arguments.length;
var i__7485__auto___33977 = (0);
while(true){
if((i__7485__auto___33977 < len__7484__auto___33976)){
args33973.push((arguments[i__7485__auto___33977]));

var G__33978 = (i__7485__auto___33977 + (1));
i__7485__auto___33977 = G__33978;
continue;
} else {
}
break;
}

var G__33975 = args33973.length;
switch (G__33975) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33973.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.call(null,cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__7491__auto__ = [];
var len__7484__auto___33982 = arguments.length;
var i__7485__auto___33983 = (0);
while(true){
if((i__7485__auto___33983 < len__7484__auto___33982)){
args__7491__auto__.push((arguments[i__7485__auto___33983]));

var G__33984 = (i__7485__auto___33983 + (1));
i__7485__auto___33983 = G__33984;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.call(null,in$,new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq33980){
var G__33981 = cljs.core.first.call(null,seq33980);
var seq33980__$1 = cljs.core.next.call(null,seq33980);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__33981,seq33980__$1);
});

cljs_time.core.month_range = (function cljs_time$core$month_range(p__33987){
var map__33990 = p__33987;
var map__33990__$1 = ((((!((map__33990 == null)))?((((map__33990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33990):map__33990);
var start = cljs.core.get.call(null,map__33990__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__33990__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.take_while.call(null,((function (map__33990,map__33990__$1,start,end){
return (function (p1__33986_SHARP_){
return cljs.core.not.call(null,cljs_time.core.after_QMARK_.call(null,p1__33986_SHARP_,end));
});})(map__33990,map__33990__$1,start,end))
,cljs.core.map.call(null,((function (map__33990,map__33990__$1,start,end){
return (function (p1__33985_SHARP_){
return cljs_time.core.plus.call(null,start,cljs_time.core.months.call(null,(p1__33985_SHARP_ + (1))));
});})(map__33990,map__33990__$1,start,end))
,cljs.core.range.call(null)));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.call(null,(function (p1__33992_SHARP_){
return p1__33992_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range.call(null,interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__33993){
var map__33996 = p__33993;
var map__33996__$1 = ((((!((map__33996 == null)))?((((map__33996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33996):map__33996);
var interval = map__33996__$1;
var start = cljs.core.get.call(null,map__33996__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__33996__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core.count.call(null,cljs_time.core.total_days_in_whole_months.call(null,interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__33998){
var map__34001 = p__33998;
var map__34001__$1 = ((((!((map__34001 == null)))?((((map__34001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34001):map__34001);
var start = cljs.core.get.call(null,map__34001__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__34001__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var sm = cljs_time.core.month.call(null,start);
var sd = cljs_time.core.day.call(null,start);
var em = cljs_time.core.month.call(null,end);
var ed = cljs_time.core.day.call(null,end);
var d1 = (cljs.core.truth_((function (){var and__6397__auto__ = cljs_time.core._EQ_.call(null,sm,(2));
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = cljs_time.core._EQ_.call(null,sd,(29));
if(cljs.core.truth_(and__6397__auto____$1)){
var and__6397__auto____$2 = cljs_time.core._EQ_.call(null,em,(2));
if(cljs.core.truth_(and__6397__auto____$2)){
return cljs_time.core._EQ_.call(null,ed,(28));
} else {
return and__6397__auto____$2;
}
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_.call(null,cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),sm,sd),cljs_time.core.date_time.call(null,cljs_time.core.year.call(null,start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year.call(null,end) - cljs_time.core.year.call(null,start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize.call(null,cljs.core.name.call(null,from));
var to__$1 = cljs.core.name.call(null,to);
throw cljs.core.ex_info.call(null,cljs_time.internal.core.format.call(null,"%s cannot be converted to %s",from__$1,to__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__34003){
var map__34004 = p__34003;
var map__34004__$1 = ((((!((map__34004 == null)))?((((map__34004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34004):map__34004);
var millis = cljs.core.get.call(null,map__34004__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__34004__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__34004__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__34004__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__34004__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__34004__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__34004__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__34004__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__34006 = this;
var map__34006__$1 = ((((!((map__34006 == null)))?((((map__34006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34006):map__34006);
var millis__$1 = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__34006__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),new cljs.core.Keyword(null,"millis","millis",-1338288387));
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__34008){
var map__34009 = p__34008;
var map__34009__$1 = ((((!((map__34009 == null)))?((((map__34009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34009):map__34009);
var millis = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__34009__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__34011 = this;
var map__34011__$1 = ((((!((map__34011 == null)))?((((map__34011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34011):map__34011);
var millis__$1 = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__34011__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"months","months",-45571637));
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__6409__auto__ = years__$1;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__34013){
var map__34014 = p__34013;
var map__34014__$1 = ((((!((map__34014 == null)))?((((map__34014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34014):map__34014);
var millis = cljs.core.get.call(null,map__34014__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds = cljs.core.get.call(null,map__34014__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__34014__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours = cljs.core.get.call(null,map__34014__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days = cljs.core.get.call(null,map__34014__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks = cljs.core.get.call(null,map__34014__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months = cljs.core.get.call(null,map__34014__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years = cljs.core.get.call(null,map__34014__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var map__34016 = this;
var map__34016__$1 = ((((!((map__34016 == null)))?((((map__34016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34016):map__34016);
var millis__$1 = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var seconds__$1 = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes__$1 = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var hours__$1 = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var days__$1 = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var weeks__$1 = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var months__$1 = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var years__$1 = cljs.core.get.call(null,map__34016__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"millis","millis",-1338288387),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),new cljs.core.Keyword(null,"years","years",-1298579689));
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__34018){
var map__34019 = p__34018;
var map__34019__$1 = ((((!((map__34019 == null)))?((((map__34019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34019):map__34019);
var start = cljs.core.get.call(null,map__34019__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__34019__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__34021 = this;
var map__34021__$1 = ((((!((map__34021 == null)))?((((map__34021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34021):map__34021);
var start__$1 = cljs.core.get.call(null,map__34021__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__34021__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis.call(null,this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes.call(null,this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours.call(null,this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days.call(null,this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_.call(null,this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_.call(null,this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var args34023 = [];
var len__7484__auto___34029 = arguments.length;
var i__7485__auto___34030 = (0);
while(true){
if((i__7485__auto___34030 < len__7484__auto___34029)){
args34023.push((arguments[i__7485__auto___34030]));

var G__34031 = (i__7485__auto___34030 + (1));
i__7485__auto___34030 = G__34031;
continue;
} else {
}
break;
}

var G__34025 = args34023.length;
switch (G__34025) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34023.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__34026,date){
var map__34027 = p__34026;
var map__34027__$1 = ((((!((map__34027 == null)))?((((map__34027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34027):map__34027);
var start = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__34027__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs_time.core.within_QMARK_.call(null,start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__6409__auto__ = cljs_time.core._EQ_.call(null,start,date);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var and__6397__auto__ = cljs_time.core.before_QMARK_.call(null,start,date);
if(cljs.core.truth_(and__6397__auto__)){
return cljs_time.core.after_QMARK_.call(null,end,date);
} else {
return and__6397__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var args34033 = [];
var len__7484__auto___34042 = arguments.length;
var i__7485__auto___34043 = (0);
while(true){
if((i__7485__auto___34043 < len__7484__auto___34042)){
args34033.push((arguments[i__7485__auto___34043]));

var G__34044 = (i__7485__auto___34043 + (1));
i__7485__auto___34043 = G__34044;
continue;
} else {
}
break;
}

var G__34035 = args34033.length;
switch (G__34035) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34033.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__34036,p__34037){
var map__34038 = p__34036;
var map__34038__$1 = ((((!((map__34038 == null)))?((((map__34038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34038):map__34038);
var start_a = cljs.core.get.call(null,map__34038__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__34038__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__34039 = p__34037;
var map__34039__$1 = ((((!((map__34039 == null)))?((((map__34039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34039):map__34039);
var start_b = cljs.core.get.call(null,map__34039__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__34039__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var and__6397__auto__ = cljs.core.not.call(null,(function (){var or__6409__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
})());
if(and__6397__auto__){
return cljs_time.core.overlaps_QMARK_.call(null,start_a,end_a,start_b,end_b);
} else {
return and__6397__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__6409__auto__ = (function (){var and__6397__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);
if(cljs.core.truth_(and__6397__auto__)){
return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = (function (){var and__6397__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);
if(cljs.core.truth_(and__6397__auto__)){
return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
var or__6409__auto____$2 = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__6409__auto____$2)){
return or__6409__auto____$2;
} else {
return cljs_time.core._EQ_.call(null,start_b,end_a);
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__34046,p__34047){
var map__34052 = p__34046;
var map__34052__$1 = ((((!((map__34052 == null)))?((((map__34052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34052):map__34052);
var start_a = cljs.core.get.call(null,map__34052__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_a = cljs.core.get.call(null,map__34052__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__34053 = p__34047;
var map__34053__$1 = ((((!((map__34053 == null)))?((((map__34053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34053):map__34053);
var start_b = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end_b = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var or__6409__auto__ = cljs_time.core._EQ_.call(null,start_a,end_b);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs_time.core._EQ_.call(null,end_a,start_b);
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || (x.cljs_time$core$DateTimeProtocol$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__6397__auto__ = cljs_time.core.period_QMARK_.call(null,x);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.contains_QMARK_.call(null,x,type);
} else {
return and__6397__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"months","months",-45571637),val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"days","days",-1394072564),val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"hours","hours",58380855),val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"minutes","minutes",1319166394),val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_.call(null,new cljs.core.Keyword(null,"seconds","seconds",-445266194),val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var args34058 = [];
var len__7484__auto___34061 = arguments.length;
var i__7485__auto___34062 = (0);
while(true){
if((i__7485__auto___34062 < len__7484__auto___34061)){
args34058.push((arguments[i__7485__auto___34062]));

var G__34063 = (i__7485__auto___34062 + (1));
i__7485__auto___34062 = G__34063;
continue;
} else {
}
break;
}

var G__34060 = args34058.length;
switch (G__34060) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34058.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_.call(null,dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var args34065 = [];
var len__7484__auto___34068 = arguments.length;
var i__7485__auto___34069 = (0);
while(true){
if((i__7485__auto___34069 < len__7484__auto___34068)){
args34065.push((arguments[i__7485__auto___34069]));

var G__34070 = (i__7485__auto___34069 + (1));
i__7485__auto___34069 = G__34070;
continue;
} else {
}
break;
}

var G__34067 = args34065.length;
switch (G__34067) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34065.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.call(null,year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var args34072 = [];
var len__7484__auto___34075 = arguments.length;
var i__7485__auto___34076 = (0);
while(true){
if((i__7485__auto___34076 < len__7484__auto___34075)){
args34072.push((arguments[i__7485__auto___34076]));

var G__34077 = (i__7485__auto___34076 + (1));
i__7485__auto___34076 = G__34077;
continue;
} else {
}
break;
}

var G__34074 = args34072.length;
switch (G__34074) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34072.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_.call(null,dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_.call(null,cljs_time.core.date_time.call(null,year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
cljs_time.core.IToPeriod = function(){};

cljs_time.core.__GT_period = (function cljs_time$core$__GT_period(obj){
if((!((obj == null))) && (!((obj.cljs_time$core$IToPeriod$__GT_period$arity$1 == null)))){
return obj.cljs_time$core$IToPeriod$__GT_period$arity$1(obj);
} else {
var x__7072__auto__ = (((obj == null))?null:obj);
var m__7073__auto__ = (cljs_time.core.__GT_period[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,obj);
} else {
var m__7073__auto____$1 = (cljs_time.core.__GT_period["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"IToPeriod.->period",obj);
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (p__34079){
var map__34080 = p__34079;
var map__34080__$1 = ((((!((map__34080 == null)))?((((map__34080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34080):map__34080);
var interval = map__34080__$1;
var start = cljs.core.get.call(null,map__34080__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__34080__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var map__34082 = this;
var map__34082__$1 = ((((!((map__34082 == null)))?((((map__34082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34082):map__34082);
var interval__$1 = map__34082__$1;
var start__$1 = cljs.core.get.call(null,map__34082__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end__$1 = cljs.core.get.call(null,map__34082__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var years = cljs_time.core.in_years.call(null,interval__$1);
var start_year = cljs_time.core.year.call(null,start__$1);
var leap_years = cljs.core.count.call(null,cljs.core.remove.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.call(null,start_year,(start_year + years)))));
var start_month = cljs_time.core.month.call(null,start__$1);
var days_in_months = cljs_time.core.total_days_in_whole_months.call(null,interval__$1);
var months = (cljs.core.count.call(null,days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.call(null,cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days.call(null,interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours.call(null,interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes.call(null,interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds.call(null,interval__$1) - seconds_to_remove);
return cljs_time.core.period.call(null,new cljs.core.Keyword(null,"years","years",-1298579689),years,new cljs.core.Keyword(null,"months","months",-45571637),months,new cljs.core.Keyword(null,"days","days",-1394072564),days,new cljs.core.Keyword(null,"hours","hours",58380855),hours,new cljs.core.Keyword(null,"minutes","minutes",1319166394),minutes,new cljs.core.Keyword(null,"seconds","seconds",-445266194),seconds,new cljs.core.Keyword(null,"millis","millis",-1338288387),(cljs_time.core.in_millis.call(null,interval__$1) - ((1000) * (seconds + seconds_to_remove))));
});

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
});
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var args34084 = [];
var len__7484__auto___34089 = arguments.length;
var i__7485__auto___34090 = (0);
while(true){
if((i__7485__auto___34090 < len__7484__auto___34089)){
args34084.push((arguments[i__7485__auto___34090]));

var G__34091 = (i__7485__auto___34090 + (1));
i__7485__auto___34090 = G__34091;
continue;
} else {
}
break;
}

var G__34086 = args34084.length;
switch (G__34086) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34084.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var midnight = (function (){var G__34087 = (new goog.date.Date());
G__34087.setTime(cljs_time.core._STAR_ms_fn_STAR_.call(null));

return G__34087;
})();
var G__34088 = (new goog.date.UtcDateTime((0)));
G__34088.setYear(midnight.getYear());

G__34088.setMonth(midnight.getMonth());

G__34088.setDate(midnight.getDate());

G__34088.setHours(hours);

G__34088.setMinutes(minutes);

G__34088.setSeconds(seconds);

G__34088.setMilliseconds(millis);

return G__34088;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.call(null,hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.call(null,hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;

cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_34094 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn.call(null,base_date_time.getTime());

try{return body_fn.call(null);
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_34094;
}});

//# sourceMappingURL=core.js.map?rel=1485242676437