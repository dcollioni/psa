using PatientAdministrationSystem.Application.Entities;
using PatientAdministrationSystem.Application.Interfaces;
using PatientAdministrationSystem.Application.Repositories.Interfaces;
using System.Linq.Expressions;

namespace PatientAdministrationSystem.Application.Services;

public class PatientsService : IPatientsService
{
    private readonly IPatientsRepository _repository;

    public PatientsService(IPatientsRepository repository)
    {
        _repository = repository;
    }

    public ICollection<PatientEntity> FindAll(string? search)
    {
        return _repository.FindAll(search);
    }

    public PatientEntity? FindOne(Guid patientId)
    {
       return _repository.FindOne(patientId);
    }

    public ICollection<VisitEntity> FindVisitsByPatient(Guid patientId)
    {
        return _repository.FindVisitsByPatient(patientId);
    }
}