using System.Linq.Expressions;
using PatientAdministrationSystem.Application.Entities;

namespace PatientAdministrationSystem.Application.Repositories.Interfaces;

public interface IPatientsRepository
{   
    ICollection<PatientEntity> FindAll(string? search);
    PatientEntity? FindOne(Guid patientId);
    ICollection<VisitEntity> FindVisitsByPatient(Guid patientId);
}